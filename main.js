function search(value) {
    console.log(`INI VALUEE ${value} <<<<<<<<<<<`);

    let url = `http://localhost:3000/video?search=${value}`

    $.ajax({
        url: url,
        method: 'GET'
    })
        .done(respone => {
            // console.log(`INI HASILNYA COYYY`);

            // console.log(respone.data.items[0].snippet.title);
            try {
                var list = `<div class="row">`
                var BreakException = {}
                respone.data.items.forEach((item, index) => {
                    if (index === 3) {
                        list += `</div>`
                        throw BreakException
                    } else {
                        list += `<div class="col s4" style="text-align:center">
                        <iframe src="https://www.youtube.com/embed/${item.id.videoId}" height="200" width="300"></iframe>
                        <br>
                        <a href=https://www.youtube.com/watch?v=${item.id.videoId}>${item.snippet.title}</a>
                        <br>
                        </div>`
                    }
                })
            } catch (e) {
                if (e !== BreakException) throw e;
            }


            $('#result-search').html(list)
        })
        .fail(err => {
            console.log(err);

        })
}