jquery.tableScrollable.js
=========================
tableのtheadを固定してtbodyのみをスクロール可能にするプラグインです。  
最低限のCSS処理しかしていないので、テーブルのデザインを破壊しません。  
Twitter Bootstrapのtableと合わせて使うのに便利です。  

This is super simple table scrollable plugin.  
It makes table to fixed thead and scrollable tbody.  
### HOW TO USE
    <head>
    ...
    <script src="path/to/jquery.js"></script>
    <script src="path/to/jquery.tableScrollable.js"></script>
    <script>
      $(function() {
        $('#table-id').tableScroll();
      });
    </script>
    ...
    </head>

### Options
    $('#table-id').tableScrollable({
      height : 400 // tbody's height (default 400)
    });
