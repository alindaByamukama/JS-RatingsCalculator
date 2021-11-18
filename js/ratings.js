function collect_ratings() {
    let ratings = 
    {
        count: 0, 
        sum: 0, 
        average: 0
    };
    const elements = document.querySelectorAll('.rating');
    let rating = elements.forEach(element => {
         parseInt(element.id.replace('star', ''))
         count += parseInt(element.value);
         sum += parseInt(element.value * rating);
    });

    if (count != 0) { average = sum / count; }

    return ratings;
};

const ratings = document.addEventListener(change, function collect_ratings(){
    document.querySelector('#average').setAttribute('value', ratings.average);
    ratings.average.toFixed(2);
});