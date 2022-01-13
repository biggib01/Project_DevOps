$(document).ready(function(e) {
	var yaer_select = document.querySelector('#year');
	var semester_select = document.querySelector('#semester');
    
	var data1 = [
	    { id: '001101', subject: 'FUNDAMENTAL ENGLISH 1', grade: 'B+' },
	    { id: '206113', subject: 'CAL FOR SOFTWARE TECH', grade: 'D+' },
	    { id: '261111', subject: 'INTERNET AND ONLINE COMMUNITY', grade: 'B+' },
	    { id: '951100', subject: 'MODERN LIFE AND ANIMATION', grade: 'B+' },
	    { id: '953100', subject: 'COMPUTERS AND PROGRAMMING', grade: 'A' },
	    { id: '955102', subject: 'DIGITAL LITERACY', grade: 'B' },
	    { id: '955103', subject: 'PROGRAMMING LOGICAL THINKING', grade: 'B' },
	    { id: '', subject: 'Total GPA', grade: '3.11'}
	];
    
	var data2 = [
	    { id: '001102', subject: 'FUNDAMENTAL ENGLISH 2', grade: 'B+' },
	    { id: '140104', subject: 'CITIZENSHIP', grade: 'C+' },
	    { id: '206281', subject: 'DISCRETE MATHEMATICS', grade: 'F' },
	    { id: '953102', subject: 'ADT & PROBLEM SOLVING', grade: 'B' },
	    { id: '953202', subject: 'INTRODUCTION TO SE', grade: 'B+' },
	    { id: '953211', subject: 'COMPUTER ORGANIZATION', grade: 'B' },
	    { id: '953231', subject: 'OBJECT ORIENTED PROGRAMMING', grade: 'C+' },
	    { id: '', subject: 'Total GPA', grade: '2.64'}
	];
    
	var data3 = [
	    { id: '001201', subject: 'CRIT READ AND EFFEC WRITE', grade: 'C+' },
	    { id: '011269', subject: 'PHIL OF SUFFICIENCY ECON', grade: 'A' },
	    { id: '208263', subject: 'ELEMENTARY STATISTICS', grade: 'D' },
	    { id: '953201', subject: 'ALGORITHMS DESIGN AND ANALYSIS', grade: 'C+' },
	    { id: '953212', subject: 'DB SYS & DB SYS DESIGN', grade: 'C' },
	    { id: '953233', subject: 'ADVANCED PROGRAMMING', grade: 'C' },
	    { id: '953251', subject: 'HFAC IN DIGI INTERACT DESIGN', grade: 'D+' },
	    { id: '', subject: 'Total GPA', grade: '2.21'}
	];
    
	var data4 = [
	    { id: '001225', subject: 'ENGL IN SCIENCE & TECH CONT', grade: 'N/A' },
	    { id: '013110', subject: 'PSYCHOLOGY AND DAILY LIFE', grade: 'N/A' },
	    { id: '206255', subject: 'MATH FOR SOFTWARE TECH', grade: 'N/A' },
	    { id: '953111', subject: 'SOFTWARE FOR EVERYDAY LIFE', grade: 'N/A' },
	    { id: '953214', subject: 'OS & COMP NETWORK', grade: 'N/A' },
	    { id: '953234', subject: 'DEV OPS', grade: 'N/A' },
	    { id: '953262', subject: 'FRONT-END WEB DEV FOUNDATION', grade: 'N/A' },
	    { id: '', subject: 'Total GPA', grade: 'N/A'}
	];
    
	function loadTable(tableId, fields, data) {
	    var rows = '';
	    var rows_max = tableId.length;
	    $.each(data, function(index, item) {
		var row = '<tr>';
		$.each(fields, function(index, field) {
		    row += '<td>' + item[field+''] + '</td>';
		});
		rows += row + '<tr>';
	    });
	    $('#' + tableId + ' tbody').html(rows);
	}
	
    
	yaer_select.addEventListener('change',function(){
	    if(yaer_select.value == 1 && semester_select.value == 1) {
		loadTable('data-table', ['id', 'subject', 'grade',], data1); 
	    }else if(yaer_select.value == 1 && semester_select.value == 2) {
		loadTable('data-table', ['id', 'subject', 'grade',], data2);
	    }else if(yaer_select.value == 2 && semester_select.value == 1) {
		loadTable('data-table', ['id', 'subject', 'grade',], data3);
	    }else if(yaer_select.value == 2 && semester_select.value == 2) {
		loadTable('data-table', ['subject', 'grade',], data4);
	    }
	},false);
    
	semester_select.addEventListener('change',function(){
	    if(yaer_select.value == 1 && semester_select.value == 1) {
		loadTable('data-table', ['id', 'subject', 'grade',], data1); 
	    }else if(yaer_select.value == 1 && semester_select.value == 2) {
		loadTable('data-table', ['id', 'subject', 'grade',], data2);
	    }else if(yaer_select.value == 2 && semester_select.value == 1) {
		loadTable('data-table', ['id', 'subject', 'grade',], data3);
	    }else if(yaer_select.value == 2 && semester_select.value == 2) {
		loadTable('data-table', ['id', 'subject', 'grade',], data4);
	    }
	}, false);
    });