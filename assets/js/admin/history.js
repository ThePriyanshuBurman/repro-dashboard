

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

    //select2 for dropdowns in offcanvas

    var select2 = $('.select2');
    if (select2.length) {
        select2.each(function () {
            var $this = $(this);
            $this.wrap('<div class="position-relative"></div>').select2({
                dropdownParent: $this.parent(),
                placeholder: $this.data('placeholder') //for dynamic placeholder
            });
        });
    }

    // Customers List Datatable

    if (dt_category_list_table.length) {
        var dt_category = dt_category_list_table.DataTable({
            ajax: assetsPath + 'json/admin/history.json', // JSON file to add data
            columns: [
                // columns according to JSON
                { data: 'scheduled' }, // Scheduled Date
                { data: 'completed' }, // Completed Date
                { data: 'client' }, // Client Name (Abe Farsh)
                { data: 'clientEmail' }, // Client Email
                { data: 'phone' }, // Phone (empty)
                { data: 'company' }, // Company (empty)
                { data: 'totalShoots' }, // Total Shoots
                { data: 'fullAddress' }, // Full Address
                { data: 'photographer' }, // Photographer
                { data: 'services' }, // Services
                { data: 'baseQuote' }, // Base Quote
                { data: 'taxPercent' }, // Tax Percent
                { data: 'taxAmount' }, // Tax Amount
                { data: 'totalQuote' }, // Total Quote
                { data: 'totalPaid' }, // Total Paid
                { data: 'lastPaymentDate' }, // Last Payment Date
                { data: 'lastPaymentType' }, // Last Payment Type
                { data: 'totalPurchased' }, // Total Purchased
                { data: 'shootNotes' }, // Shoot Notes
                { data: 'photographerNotes' }, // Photographer Notes
                { data: 'userAccountCreatedBy' } // Account Created By
            ],
            columnDefs: [
                // {
                //     // For Responsive
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
                //     // For Checkboxes
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
                    // scheduled
                    targets: 0,
                    responsivePriority: 0,
                    render: function (data, type, full, meta) {
                        var $scheduled = full['scheduled'];
                        return '<div class="text-sm-center">' + $scheduled + '</div>';
                    }
                },
                {
                    // completed
                    targets: 1,
                    responsivePriority: 1,
                    render: function (data, type, full, meta) {
                        var $completed = full['completed'];
                        return '<div class="text-sm-center">' + $completed + '</div>';
                    }
                },
                {
                    // client Name
                    targets: 2,
                    responsivePriority: 2,
                    render: function (data, type, full, meta) {
                        var $client = full['client'];
                        return "<div class='text-sm-center text-nowrap'>" + $client + '</div>';
                    }
                },
                {
                    // client email
                    targets: 3,
                    responsivePriority: 3,
                    render: function (data, type, full, meta) {
                        var $clientEmail = full['clientEmail'];
                        return '<div class="text-sm-center">' + $clientEmail + '</div>';
                    }
                },
                {
                    // phone number
                    targets: 4,
                    orderable: false,
                    render: function (data, type, full, meta) {
                        var $phone = full['phone'];
                        return "<div class='text-sm-center text-nowrap'>" + $phone + '</div>';
                    }
                },
                {
                    // company
                    targets: 5,
                    responsivePriority: 5,
                    render: function (data, type, full, meta) {
                        var $company = full['company'];
                        return "<div class='text-sm-center text-nowrap'>" + $company + '</div>';
                    }
                },
                {
                    // total Shoots
                    targets: 6,
                    responsivePriority: 6,
                    render: function (data, type, full, meta) {
                        var $totalShoots = full['totalShoots'];
                        return "<div class='text-sm-center'>" + $totalShoots + '</div>';
                    }
                },
                {
                    // Full Address
                    targets: 7,
                    responsivePriority: 7,
                    render: function (data, type, full, meta) {
                        var $fullAddress = full['fullAddress'];
                        return "<div class='text-sm-start text-nowrap'>" + $fullAddress + '</div>';
                    }
                },
                {
                    // Photographer Name
                    targets: 8,
                    responsivePriority: 8,
                    render: function (data, type, full, meta) {
                        var $photographer = full['photographer'];
                        return '<div class="text-sm-center">' + $photographer + '</div>';
                    }
                },
                {
                    // services
                    targets: 9,
                    responsivePriority: 9,
                    render: function (data, type, full, meta) {
                        var $services = full['services'];
                        return '<div class="text-sm-start text-wrap">' + $services + '</div>';
                    }
                },
                {
                    // client email
                    targets: 10,
                    responsivePriority: 10,
                    render: function (data, type, full, meta) {
                        var $baseQuote = full['baseQuote'];
                        return '<div class="text-sm-center">' + $baseQuote + '</div>';
                    }
                },
                {
                    // client email
                    targets: 11,
                    responsivePriority: 11,
                    render: function (data, type, full, meta) {
                        var $taxPercent = full['taxPercent'];
                        return '<div class="text-sm-center">' + $taxPercent + '</div>';
                    }
                },
                {
                    // client email
                    targets: 12,
                    responsivePriority: 12,
                    render: function (data, type, full, meta) {
                        var $taxAmount = full['taxAmount'];
                        return '<div class="text-sm-center">' + $taxAmount + '</div>';
                    }
                },
                {
                    // client email
                    targets: 13,
                    responsivePriority: 13,
                    render: function (data, type, full, meta) {
                        var $totalQuote = full['totalQuote'];
                        return '<div class="text-sm-center">' + $totalQuote + '</div>';
                    }
                },
                {
                    // client email
                    targets: 14,
                    responsivePriority: 14,
                    render: function (data, type, full, meta) {
                        var $totalPaid = full['totalPaid'];
                        return '<div class="text-sm-center">' + $totalPaid + '</div>';
                    }
                },
                {
                    // client email
                    targets: 15,
                    responsivePriority: 15,
                    render: function (data, type, full, meta) {
                        var $lastPaymentDate = full['lastPaymentDate'];
                        return '<div class="text-sm-center">' + $lastPaymentDate + '</div>';
                    }
                },
                {
                    // client email
                    targets: 16,
                    responsivePriority: 16,
                    render: function (data, type, full, meta) {
                        var $lastPaymentType = full['lastPaymentType'];
                        return '<div class="text-sm-center">' + $lastPaymentType + '</div>';
                    }
                },
                {
                    // client email
                    targets: 17,
                    responsivePriority: 17,
                    render: function (data, type, full, meta) {
                        var $totalPurchased = full['totalPurchased'];
                        return '<div class="text-sm-center">' + $totalPurchased + '</div>';
                    }
                },
                {
                    // client email
                    targets: 18,
                    responsivePriority: 18,
                    render: function (data, type, full, meta) {
                        var $shootNotes = full['shootNotes'];
                        return '<div class="text-sm-center">' + $shootNotes + '</div>';
                    }
                },
                {
                    // client email
                    targets: 19,
                    responsivePriority: 19,
                    render: function (data, type, full, meta) {
                        var $photographerNotes = full['photographerNotes'];
                        return '<div class="text-sm-center">' + $photographerNotes + '</div>';
                    }
                },
                {
                    // client email
                    targets: 20,
                    responsivePriority: 20,
                    render: function (data, type, full, meta) {
                        var $userAccountCreatedBy = full['userAccountCreatedBy'];
                        return '<div class="text-sm-center">' + $userAccountCreatedBy + '</div>';
                    }
                },
            ],
            order: [2, 'asc'], //set any columns order asc/desc
            dom:
                '<"card-header d-flex flex-wrap py-0 flex-column flex-sm-row"' +
                '<f>' +
                '<"d-flex justify-content-center justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex justify-content-center flex-md-row align-items-baseline"lB>>' +
                '>t' +
                '<"row mx-1"' +
                '<"col-sm-12" <"dataTables_scrollBody"t>>' +
                '<"col-sm-12 col-md-6"i>' +
                '<"col-sm-12 col-md-6"p>' +
                '>',
            lengthMenu: [7, 10, 20, 50, 70, 100], //for length of menu
            language: {
                sLengthMenu: '_MENU_',
                search: '',
                searchPlaceholder: 'Search Category',
                paging:'full',
                paginate: {
                    next: '<i class="ti ti-chevron-right ti-sm"></i>',
                    previous: '<i class="ti ti-chevron-left ti-sm"></i>'
                }
            },
            buttons: [
                {
                    extend: 'collection',
                    className: 'btn btn-label-secondary dropdown-toggle me-4 waves-effect waves-light',
                    text: '<i class="ti ti-upload me-1 ti-xs"></i>Export',
                    buttons: [
                        {
                            extend: 'print',
                            text: '<i class="ti ti-printer me-2" ></i>Print',
                            className: 'dropdown-item',
                            exportOptions: {
                                columns: [1, 2, 3, 4, 5, 6, 7],
                                format: {
                                    body: function (inner, coldex, rowdex) {
                                        if (inner.length <= 0) return inner;
                                        var el = $.parseHTML(inner);
                                        var result = '';
                                        $.each(el, function (index, item) {
                                            if (item.classList !== undefined && item.classList.contains('product-name')) {
                                                result = result + item.lastChild.firstChild.textContent;
                                            } else if (item.innerText === undefined) {
                                                result = result + item.textContent;
                                            } else result = result + item.innerText;
                                        });
                                        return result;
                                    }
                                }
                            },
                            customize: function (win) {
                                // Customize print view for dark
                                $(win.document.body)
                                    .css('color', headingColor)
                                    .css('border-color', borderColor)
                                    .css('background-color', bodyBg);
                                $(win.document.body)
                                    .find('table')
                                    .addClass('compact')
                                    .css('color', 'inherit')
                                    .css('border-color', 'inherit')
                                    .css('background-color', 'inherit');
                            }
                        },
                        {
                            extend: 'csv',
                            text: '<i class="ti ti-file me-2" ></i>Csv',
                            className: 'dropdown-item',
                            exportOptions: {
                                columns: [1, 2, 3, 4, 5, 6, 7],
                                format: {
                                    body: function (inner, coldex, rowdex) {
                                        if (inner.length <= 0) return inner;
                                        var el = $.parseHTML(inner);
                                        var result = '';
                                        $.each(el, function (index, item) {
                                            if (item.classList !== undefined && item.classList.contains('product-name')) {
                                                result = result + item.lastChild.firstChild.textContent;
                                            } else if (item.innerText === undefined) {
                                                result = result + item.textContent;
                                            } else result = result + item.innerText;
                                        });
                                        return result;
                                    }
                                }
                            }
                        },
                        {
                            extend: 'copy',
                            text: '<i class="ti ti-copy me-2"></i>Copy',
                            className: 'dropdown-item',
                            exportOptions: {
                                columns: [1, 2, 3, 4, 5, 6, 7],
                                format: {
                                    body: function (inner, coldex, rowdex) {
                                        if (inner.length <= 0) return inner;
                                        var el = $.parseHTML(inner);
                                        var result = '';
                                        $.each(el, function (index, item) {
                                            if (item.classList !== undefined && item.classList.contains('product-name')) {
                                                result = result + item.lastChild.firstChild.textContent;
                                            } else if (item.innerText === undefined) {
                                                result = result + item.textContent;
                                            } else result = result + item.innerText;
                                        });
                                        return result;
                                    }
                                }
                            }
                        }
                    ]
                },
            ],
        });
        $('.dt-action-buttons').addClass('pt-0');
        $('.dataTables_filter').addClass('me-3 mb-sm-6 mb-0 ps-0');

        $('.dataTable th').css('width', 'calc(100% / ' + dt_category.columns().count() + ')');
        $('.dataTable td').css('width', 'calc(100% / ' + dt_category.columns().count() + ')');
    }

    // Filter form control to default size
    // ? setTimeout used for multilingual table initialization
    setTimeout(() => {
        $('.dataTables_filter .form-control').removeClass('form-control-sm');
        // $('.dataTables_filter .form-control').addClass('ms-0');
        $('.dataTables_length .form-select').removeClass('form-select-sm');
        // $('.dataTables_length .form-select').addClass('ms-0');
    }, 300);
});
