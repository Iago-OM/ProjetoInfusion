function Carousel(config) {

    
    this.container = (typeof config.container === 'string') ?
      document.querySelectorAll(config.container) : config.container


    this.itens = (typeof config.itens === 'string') ?
      document.querySelectorAll(config.itens) : config.itens

    this.btnPrev = (typeof config.btnPrev === 'string') ?
      document.querySelectorAll(config.btnPrev) : config.btnPrev

    this.btnNext = (typeof config.btnNext === 'string') ?
      document.querySelectorAll(config.btnNext) : config.btnNext

      let _this = this;

      init()
      function init(){
        let _show = _this.container.querySelectorAll('.show');
        Array.prototype.forEach.call( _show, function(sh){
          sh.classList.remove('show')
        })
        _this.itens[0].classList.add('show')
        _this.btnNext.removeAttribute('style')
        _this.btnPrev.removeAttribute('style')
        addListener()

      }
      function addListener(){
        _this.btnNext.add
      }
  }
