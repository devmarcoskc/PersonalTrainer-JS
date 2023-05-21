//JSON itens:
transformJSON.map((item, index) => {
    let pplINFOS = document.querySelector('.grid-transform-container .img-and-content-container').cloneNode(true);
    pplINFOS.style.display = 'flex';

    pplINFOS.querySelector('#image-01').src = item.img01;
    pplINFOS.querySelector('#image-02').src = item.img02;
    pplINFOS.querySelector('#data-01').innerHTML = item.firstCalendar;
    pplINFOS.querySelector('#data-02').innerHTML = item.secondCalendar;
    pplINFOS.querySelector('.transform-description-area').innerHTML = item.description;
    document.querySelector('.grid-transform-container').appendChild(pplINFOS);

});