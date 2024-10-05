        // Toggle side menu visibility
        function toggleSideMenu() {
            $('.side-menu').slideToggle();
        }

        // Toggle add modal visibility
        function toggleModalAdd() {
            $('.modalAdd').slideToggle();
        }

        // Toggle edit modal visibility
    function toggleModalEdit() {
        $('.modalEdit').slideToggle();
    }

    // Toggle delete modal visibility
    function toggleModalDelete() {
        $('.modalDelete').slideToggle();
    }

    // Toggle view modal visibility
    function toggleModalView() {
        $('.modalView').slideToggle();
    }

    // Set active tag and filter tasks by tag
    function setActiveTag() {
        $('.side-menu ul li').click(function() {
            $('.side-menu ul li').removeClass('active');
            $(this).addClass('active');
            DATA_GetTasksByTag($(this).text());
        });
    }

    // Add new task
    function addNewTask() {
        $('#add-task').on('submit', function(event) {
            event.preventDefault();
            var name = $('#name').val();
            var description = $('#description').val();
            var end_date = $('#endDate').val();
            var end_time = $('#endTime').val();
            var tag = $('#tags').val();

            // Validate form inputs
            if (name == '' || description == '' || end_date == '' || end_time == '' || tag == '') {
                alert('All fields are required');
                return false;
            }

            if (end_date < new Date().toISOString().split('T')[0]) {
                alert('End date must be greater than today');
                return false;
            }

            if (end_date == new Date().toISOString().split('T')[0] && end_time < new Date().toISOString().split('T')[1]) {
                alert('End time must be greater than now');
                return false;
            }

            if (name.length < 3) {
                alert('Task name must have at least 3 characters');
                return false;
            }

            if (description.length < 3) {
                alert('Task description must have at least 3 characters');
                return false;
            }

            if (tag.length < 3) {
                alert('Tag must have at least 3 characters');
                return false;
            }

            // Add new tag if it doesn't exist
            var tags = JSON.parse(localStorage.getItem('tags'));
            if (!tags.includes(tag)) {
                DATA_addNewTag(tag);
                $('#tagList').append('<option value="' + tag + '"></option>');
                $('#side-menu-tags').append('<li><a>' + tag + '</a></li>');
            }

            // Add task to local storage and update UI
            DATA_AddTask();
            $('.task-list').append(`<div class="task">
                                        <div class="description">
                                            <h2 id="task-name">${name}</h2>
                                            <p>${description}</p>
                                            <small>End-date: ${endDate} - ${endTime}</small>
                                            <small> | ${tags}</small>
                                        </div>
                                        <div class="actions">
                                            <button id="undoneBTN">Done</button>
                                            <button id="editBTN" disabled>Edit</button>
                                            <button id="deletBTN" disabled>Delete</button>
                                        </div>
                                    </div>`);
            toggleModalAdd(); // Close the modal after adding the task
        });
    }

    // Add new tag to local storage
    function DATA_addNewTag(tag) {
        var tags = JSON.parse(localStorage.getItem('tags')) || [];
        tags.push(tag);
        localStorage.setItem('tags', JSON.stringify(tags));
    }

    // Get tags from local storage and display them
    function DATA_getTags() {
        var tags = JSON.parse(localStorage.getItem('tags')) || [];
        tags.forEach(tag => {
            $('#side-menu-tags').append('<li><a>' + tag + '</a></li>');
        });
    }

    // Get tasks by tag from local storage and display them
    function DATA_GetTasksByTag(tag) {
        var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        $('.task-list').html('');
        tasks.forEach(task => {
            if (task.tag == tag) {
                $('.task-list').append(`<div class="task">
                                            <div class="description">
                                                <h2>${task.name}</h2>
                                                <p>${task.description}</p>
                                                <small>End-date: ${task.end_date} - ${task.end_time}</small>
                                                <small>${task.tag}</small>
                                            </div>
                                            <div class="actions">
                                                <button>Done</button>
                                                <button disabled>Edit</button>
                                                <button disabled>Delete</button>
                                            </div>
                                        </div>`);
            }
        });
    }

    // Add new task to local storage
    function DATA_AddTask() {
        var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({
            name: $('#name').val(),
            description: $('#description').val(),
            end_date: $('#endDate').val(),
            end_time: $('#endTime').val(),
            tag: $('#tags').val(),
            isDone: false
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Get all tasks from local storage and display them
    function DATA_getTasks() {
        var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            var taskHtml = `<div class="task ${task.isDone ? 'done' : ''}">
                                <div class="description">
                                    <h2 id="task-name">${task.name}</h2>
                                    <p>${task.description}</p>
                                    <small>End-date: ${task.end_date} - ${task.end_time}</small>
                                    <small> | ${task.tag}</small>
                                </div>
                                <div class="actions">
                                    <button id="${task.isDone ? 'undoneBTN' : 'doneBTN'}">${task.isDone ? 'Undone' : 'Done'}</button>
                                    <button id="editBTN" disabled>Edit</button>
                                    <button id="deletBTN" disabled>Delete</button>
                                </div>
                            </div>`;
            $('.task-list').append(taskHtml);
        });
    }

    // Mark task as done
    function setDoneTask() {
        $('.task-list').on('click', '#doneBTN', function() {
            var task = $(this).closest('.task');
            var taskName = task.find('h2').text();
            task.addClass('done');
            task.find('.actions').html('<button id="undoneBTN">Undone</button><button>Edit</button><button>Delete</button>');

            // Update task in local storage
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            tasks.forEach(task => {
                if (task.name == taskName) {
                    task.isDone = true;
                }
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        });
    }

    // Mark task as undone
    function setUndoneTask() {
        $('.task-list').on('click', '#undoneBTN', function() {
            var task = $(this).closest('.task');
            var taskName = task.find('h2').text();
            task.removeClass('done');
            task.find('.actions').html('<button id="doneBTN">Done</button><button disabled>Edit</button><button disabled>Delete</button>');

            // Update task in local storage
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            tasks.forEach(task => {
                if (task.name == taskName) {
                    task.isDone = false;
                }
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        });
    }

    // Delete task
    function deleteTask() {
        $('.task-list').on('click', '#deletBTN', function() {
            var task = $(this).closest('.task');
            var taskName = task.find('h2').text();
            task.remove();

            // Update tasks in local storage
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            tasks = tasks.filter(task => task.name !== taskName);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        });
    }

    // Document ready function
