var arr = ['one', 'two', 'three', 'four', 'stop', 'five'];
for(c = 0 ; c < arr.length; c++) {
    if (arr[c] == 'stop') {        
          break;    /* You could also write 'break 1;' here. */
    }
    document.write(arr[c]);
}