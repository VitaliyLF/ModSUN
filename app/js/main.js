$(function () {
  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
  })

  $('.shop__filter-btn').on('click', function () {
    $('.shop__filters').slideToggle()
  })

  $('.footer__hidden').on('click', function () {
    $(this).next().slideToggle()
    $(this).toggleClass('footer-top__title--active')
  })

  $('.blog-page__slider').slick({
    prevArrow:
      '<button type="button" class="slick-prev"><svg fill="#000000" width="20px" height="20px" viewBox="-128 0 512 512" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></g></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next"><svg fill="#000000" width="20px" height="20px" viewBox="-128 0 512 512" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></g></svg></button>',
    infinite: false,
  })

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault()
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active')
    $(this).addClass('product-tabs__top-item--active')

    $('.product-tabs__content-item').removeClass(
      'product-tabs__content-item--active'
    )
    $($(this).attr('href')).addClass('product-tabs__content-item--active')
  })

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  })

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          draggable: true,
          autoplay: true,
          autoplaySpeed: 750,
        },
      },
    ],
  })

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass(
      'shop-content__filter-btn--active'
    )
    $(this).addClass('shop-content__filter-btn--active')
  })

  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list')
    $('.shop-content__inner').addClass('shop-content__nogrid')
  })

  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list')
    $('.shop-content__inner').removeClass('shop-content__nogrid')
  })

  $('.select-style, .product-one__num').styler({
    locale: 'en',
  })

  $('.filter-price__input').ionRangeSlider({
    type: 'double',
    prefix: '$',
    onStart: function (data) {
      $('.filter-price__from').text(data.from)
      $('.filter-price__to').text(data.to)
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from)
      $('.filter-price__to').text(data.to)
    },
  })

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 750,
  })

  $('.star').rateYo({
    starWidth: '17px',
    normalFill: '#ccccce',
    ratedFill: '#ffc35b',
    fullStar: true,
    starSvg:
      '<svg width="18px" height="16px" viewBox="0 0 24 24" fill="none"xmlns="http://www.w3.org/2000/svg"><g id="style=fill"><g id="star"><path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd"d="M14.4012 3.17499C13.8719 2.11134 13.0447 1.32715 11.9987 1.32715C10.9539 1.32715 10.1241 2.11 9.58985 3.17284L7.82915 6.69424L7.82642 6.69975C7.77359 6.8076 7.64731 6.9611 7.45702 7.10219C7.26737 7.2428 7.0834 7.31975 6.96547 7.34005L6.96441 7.34023L3.77705 7.86979C2.62694 8.06147 1.66106 8.62118 1.34801 9.6015C1.03519 10.5811 1.49663 11.597 2.31964 12.42L4.79964 14.9C4.89724 14.9976 5.0066 15.1815 5.07518 15.4211C5.14334 15.6592 5.1491 15.8751 5.11856 16.0137L5.11813 16.0156L4.40928 19.0806C4.11373 20.3578 4.21624 21.6259 5.12539 22.2893C6.03398 22.9522 7.27361 22.6647 8.40273 21.9946L11.3871 20.2279L11.389 20.2268C11.5232 20.1494 11.7443 20.0896 12.0037 20.0896C12.265 20.0896 12.4816 20.1502 12.6076 20.2249L15.5979 21.995C16.7284 22.6628 17.9695 22.9555 18.878 22.2932C19.7878 21.6299 19.8854 20.3595 19.5908 19.0812L18.8818 16.0156L18.8814 16.0137C18.8508 15.8751 18.8566 15.6592 18.9248 15.4211C18.9933 15.1815 19.1027 14.9976 19.2003 14.9L21.6785 12.4218L21.6795 12.4208C22.5077 11.5978 22.9706 10.5811 22.6552 9.60014C22.3403 8.62044 21.3726 8.06141 20.2233 7.86985L17.0333 7.33985" fill="#  " /></g></g></svg>',
    // readOnly: true,
  })

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date())
    var seconds = Math.floor((t / 1000) % 60)
    var minutes = Math.floor((t / 1000 / 60) % 60)
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24)
    var days = Math.floor(t / (1000 * 60 * 60 * 24))
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    }
  }

  function initializeClock(id, endtime) {
    var clock = document.querySelector('.promo__clock')
    var daysSpan = clock.querySelector('.promo__days')
    var hoursSpan = clock.querySelector('.promo__hours')
    var minutesSpan = clock.querySelector('.promo__minutes')
    var secondsSpan = clock.querySelector('.promo__seconds')

    function updateClock() {
      var t = getTimeRemaining(endtime)

      daysSpan.innerHTML = t.days
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2)
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2)

      if (t.total <= 0) {
        clearInterval(timeinterval)
      }
    }

    updateClock()
    var timeinterval = setInterval(updateClock, 1000)
  }

  var deadline = $('.promo__clock').attr('data-time')
  initializeClock('promo__clock', deadline)

  let map
})
