function debounce( fn, wait,immediate ) {
  var timer;
  return ( ...args ) => {

     if(immediate && !timer)                   {fn.apply(this,args)}
     timer && clearTimeout(timer);
     timer = setTimeout(()=>{
        fn.apply(this,args);
     },wait)
  }
}
export { debounce };
