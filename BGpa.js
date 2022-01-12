$(document).ready(function(e) {
    var select = document.querySelector('#asd');
    var select1 = document.querySelector('#dsa');

    var data1 = [
        { field1: 'FUNDAMENTAL ENGLISH 1', field2: '001101', field3: 'D+'},
        { field1: 'CAL FOR SOFTWARE TECH', field2: '206113', field3: 'W'},
        { field1: 'INTERNET AND ONLINE COMMUNITY', field2: '261111', field3: 'D+'},
        { field1: 'MODERN LIFE AND ANIMATION', field2: '951100', field3: 'B'},
        { field1: 'COMPUTERS AND PROGRAMMING', field2: '953100', field3: 'B+'},
        { field1: 'DIGITAL LITERACY', field2: '955102', field3: 'C+'},
        { field1: 'PROGRAMMING LOGICAL THINKING', field2: '955103', field3: 'D+'},
        { field1: '', field2: 'Total GPA', field3: '2.20'}
        ];
    
    var data2 = [
        { field1: 'CITIZENSHIP', field2: '140104', field3: 'D' },
        { field1: 'ADT & PROBLEM SOLVING', field2: '953102', field3: 'D+' },
        { field1: 'INTRODUCTION TO SE', field2: '953202', field3: 'D+' },
        { field1: 'COMPUTER ORGANIZATION', field2: '953211', field3: 'D' },
        { field1: 'OBJECT ORIENTED PROGRAMMING', field2: '953231', field3: 'D+' },
        { field1: '', field2: 'Total GPA', field3: '1.75'}
        ];
    
    var data3 = [
        { field1: 'PHIL OF SUFFICIENCY ECON', field2: '011269', field3: 'C+' },
        { field1: 'ELEMENTARY STATISTICS', field2: '208263', field3: 'F' },
        { field1: 'ALGORITHMS DESIGN AND ANALYSIS', field2: '953201', field3: 'F' },
        { field1: 'DB SYS & DB SYS DESIGN', field2: '953212', field3: 'D' },
        { field1: 'ADVANCED PROGRAMMING', field2: '953233', field3: 'D' },
        { field1: 'HFAC IN DIGI INTERACT DESIGN', field2: '953251', field3: 'B+' },
        { field1: '', field2: 'Total GPA', field3: '1.59'}
        ];

    var data4 = [
        { field1: 'FUNDAMENTAL ENGLISH 2', field2: '001102', field3: 'N/A' },
        { field1: 'ENVIRONT CONSERVATION', field2: '154104', field3: 'N/A' },
        { field1: 'SOFTWARE FOR EVERYDAY LIFE', field2: '953111', field3: 'N/A' },
        { field1: 'OS & COMP NETWORK', field2: '953214', field3: 'N/A' },
        { field1: 'DEV OPS', field2: '953234', field3: 'N/A' },
        { field1: 'FRONT-END WEB DEV FOUNDATION', field2: '953262', field3: 'N/A' },
        { field1: '', field2: 'Total GPA', field3: 'N/A'}
        ];
    
    function loadTable(tableId, fields, data) {
        var rows = '';
        $.each(data, function(index, item) {
            var row = '<tr>';
            $.each(fields, function(index, field) {
                row += '<td>' + item[field+''] + '</td>';
            });
            rows += row + '<tr>';
        });
        $('#' + tableId + ' tbody').html(rows);
    }

    select.addEventListener('change',function(){
        if(select.value == 1 && select1.value == 1) {
            loadTable('data-table', ['field1', 'field2', 'field3',], data1); 
        }else if(select.value == 1 && select1.value == 2) {
            loadTable('data-table', ['field1', 'field2', 'field3',], data2);
        }else if(select.value == 2 && select1.value == 1) {
            loadTable('data-table', ['field1', 'field2', 'field3',], data3);
        }else if(select.value == 2 && select1.value == 2) {
            loadTable('data-table', ['field1', 'field2', 'field3',], data4);
        }
    },false);

    select1.addEventListener('change',function(){
        if(select.value == 1 && select1.value == 1) {
            loadTable('data-table', ['field1', 'field2', 'field3',], data1); 
        }else if(select.value == 1 && select1.value == 2) {
            loadTable('data-table', ['field1', 'field2', 'field3',], data2);
        }else if(select.value == 2 && select1.value == 1) {
            loadTable('data-table', ['field1', 'field2', 'field3',], data3);
        }else if(select.value == 2 && select1.value == 2) {
            loadTable('data-table', ['field1', 'field1', 'field3',], data4);
        }
    }, false);
});