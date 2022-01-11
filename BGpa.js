

$(document).ready(function(e) {
    var select = document.querySelector('#asd');
    var select1 = document.querySelector('#dsa');

    var data1 = [
        { field1: 'DEVOPS', field2: '953234', field3: 'D', field4: 'value a4' },
        { field1: 'ALGO', field2: '952...', field3: 'F', field4: 'value b4' },
        { field1: 'MATH', field2: '......', field3: 'W', field4: 'value c4' },
        { field1: '', field2: 'GPA', field3: '1.5', field4: 'value c4' }
        ];
    
    var data2 = [
        { field1: 'ASDASDW', field2: 'DDDDDD', field3: 'new value a3' },
        { field1: 'WEDAWDASD', field2: 'AAAAAA', field3: 'new value b3' },
        { field1: 'WADASDASD', field2: 'ASDASDDCCCC', field3: 'new value c3' }
        ];
    
    var data3 = [
        { field1: 'AADASDACC', field2: 'DD23232', field3: 'new value a3' },
        { field1: 'WEASDASC', field2: 'A21A', field3: 'new value b3' },
        { field1: 'WADASDASC', field2: 'ASDA424CCCC', field3: 'new value c3' }
        ];

    var data4 = [
        { field1: 'ASDASDW', field2: 'D3223DD', field3: 'new value a3' },
        { field1: 'WEDAWDASD', field2: 'AAA33232^', field3: 'new value b3' },
        { field1: 'WADASDASD', field2: 'ASD@#$#@$CCC', field3: 'new value c3' }
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