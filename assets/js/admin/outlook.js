'use strict';

// Comment editor
const commentEditor = document.querySelector('.comment-editor');
if (commentEditor) {
    new Quill(commentEditor, {
        modules: {
            toolbar: '.comment-toolbar'
        },
        placeholder: 'Write a Comment...',
        theme: 'snow'
    });
}

// Datatable (jquery)
$(function () {
    const style = $('<style>').prop('type', 'text/css').html(`
        .dataTables_wrapper {
            position: relative;
        }
        .dataTables_wrapper .dataTables_paginate {
            margin-top: 1rem; /* Space above pagination */
            text-align: center; /* Center the pagination controls */
        }
        .dataTables_wrapper .dataTables_scrollBody {
            overflow-x: auto; /* Ensure horizontal scrollbar is visible */
            overflow-y: auto; /* Enable vertical scrollbar */
            max-height: 400px; /* Adjust height as needed */
            margin-bottom: 1rem;
        } 
    `);
    $('head').append(style);

    let borderColor, bodyBg, headingColor;

    if (isDarkStyle) {
        borderColor = config.colors_dark.borderColor;
        bodyBg = config.colors_dark.bodyBg;
        headingColor = config.colors_dark.headingColor;
    } else {
        borderColor = config.colors.borderColor;
        bodyBg = config.colors.bodyBg;
        headingColor = config.colors.headingColor;
    }

    // Variable declaration for category list table
    var dt_category_list_table = $('.datatables-category-list');

    // select2 for dropdowns in offcanvas
    var select2 = $('.select2');
    if (select2.length) {
        select2.each(function () {
            var $this = $(this);
            $this.wrap('<div class="position-relative"></div>').select2({
                dropdownParent: $this.parent(),
                placeholder: $this.data('placeholder') // for dynamic placeholder
            });
        });
    }

    // Customers List Datatable
    if (dt_category_list_table.length) {
        var dt_category = dt_category_list_table.DataTable({
            ajax: assetsPath + 'json/admin/outlook.json', // JSON file to add data
            columns: [       // ID
                { data: 'email' },      // Email
                { data: 'flagged' },    // Flagged Status
                { data: 'firstName' },  // First Name
                { data: 'lastName' },   // Last Name
                { data: 'phone' },      // Phone
                { data: 'company' },
                { data: 'outlook'},     // Company
            ],
            columnDefs: [
                //{
                    // For Responsive
                //     className: 'control',
                //     searchable: false,
                //     orderable: false,
                //     responsivePriority: 1,
                //     targets: 0,
                //     render: function (data, type, full, meta) {
                //         return '';
                //     }
                // },
                // {
                    // For Checkboxes
                //     targets: 1,
                //     orderable: false,
                //     searchable: false,
                //     responsivePriority: 4,
                //     checkboxes: true,
                //     render: function () {
                //         return '<input type="checkbox" class="dt-checkboxes form-check-input">';
                //     },
                //     checkboxes: {
                //         selectAllRender: '<input type="checkbox" class="form-check-input">'
                //     }
                // },
                {
                    // Email
                    targets: 0,
                    responsivePriority: 0,
                    render: function (data, type, full, meta) {
                        var $email = full['email'];
                        return '<div class="text-sm-start text-nowrap">' + $email + '</div>';
                    }
                },
                {
                    // Flagged
                    targets: 1,
                    responsivePriority: 1,
                    render: function (data, type, full, meta) {
                        var $flagged = full['flagged'];
                        return '<div class="text-sm-start">' + $flagged + '</div>';
                    }
                },
                {
                    // First Name
                    targets: 2,
                    responsivePriority: 2,
                    render: function (data, type, full, meta) {
                        var $firstName = full['firstName'];
                        return '<div class="text-sm-start">' + $firstName + '</div>';
                    }
                },
                {
                    // Last Name
                    targets: 3,
                    responsivePriority: 3,
                    render: function (data, type, full, meta) {
                        var $lastName = full['lastName'];
                        return '<div class="text-sm-start">' + $lastName + '</div>';
                    }
                },
                {
                    // Phone
                    targets: 4,
                    responsivePriority: 4,
                    render: function (data, type, full, meta) {
                        var $phone = full['phone'];
                        return '<div class="text-sm-start text-nowrap">' + $phone + '</div>';
                    }
                },
                {
                    // Company
                    targets: 5,
                    responsivePriority: 5,
                    render: function (data, type, full, meta) {
                        var $company = full['company'];
                        return '<div class="text-sm-start text-nowrap text-capitalize">' + $company + '</div>';
                    }
                }
            ],
            order: [0, 'asc'], // Set the order of the first column (ID) to ascending
            dom:
                // Move search (<f>) between the table (<t>) and pagination (<p>)
                '<"card-header d-flex flex-wrap py-0 flex-column flex-sm-row"' +
                '<"d-flex justify-content-center justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex justify-content-center flex-md-row align-items-baseline"l>>' +
                '>t' +
                '<"row mx-1"' +
                '<"col-sm-12" <"dataTables_scrollBody"t>>' + // Table with horizontal scrollbar
                '<"col-sm-12"f>' + // Search field placed after the table
                '<"col-sm-12 col-md-6"i>' +
                '<"col-sm-12 col-md-6"p>' +
                '>',
            lengthMenu: [7, 10, 20, 50, 70, 100], 
            language: {
                sLengthMenu: '_MENU_',
                search: '',
                searchPlaceholder: 'Search Category',
                paging: 'full',
                paginate: {
                    next: '<i class="ti ti-chevron-right ti-sm"></i>',
                    previous: '<i class="ti ti-chevron-left ti-sm"></i>'
                }
            }
        });

        $('.dt-action-buttons').addClass('pt-0');
        $('.dataTables_filter').addClass('me-3 mb-sm-6 mb-0 ps-0');
        $('.dataTable th').css('width', 'calc(100% / ' + dt_category.columns().count() + ')');
        $('.dataTable td').css('width', 'calc(100% / ' + dt_category.columns().count() + ')');
    }

    // Filter form control to default size
    setTimeout(() => {
        $('.dataTables_filter .form-control').removeClass('form-control-sm');
        $('.dataTables_length .form-select').removeClass('form-select-sm');
    }, 300);
});
