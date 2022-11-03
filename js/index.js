$(".msg-alert").hide();
$(".result-msg").hide();
$(".add-box").hide();
// station click action
function btn_action(arr)
{
    //get station name
    let val = arr.attr("class").split(" ")[1];
    
    $("#target").val(val);
    get_station(val.split("-")[0], val.split("-")[1]);

    // alert position
    let pos = arr.position();
    
    if(window.screen.availWidth <= 460)
    {
        $(".msg-alert").css('top',(pos.top)+"px")
        $(".msg-alert").css('left',(pos.left + 20)+"px")
    }
    else{
        $(".msg-alert").css('top',(pos.top)+"px")
        $(".msg-alert").css('left',(pos.left + 180)+"px")
    }
    
    //show alert
    $(".msg-alert").show();

    //close result alert
    $(".result-msg").hide();
    $(".add-box").hide();
}

//get station name
function get_station(val, num)
{
    let result = '';
    
    if(num.split("")[0] == 0) num = num.split("")[1]

    switch(val){
        case "o":
            result = STATION_INFO['O'][num];
            break;
        case "r":
            result = STATION_INFO['R'][num];
            break;
        case "br":
            result = STATION_INFO['BR'][num];
            break;
        case "g":
            result = STATION_INFO['G'][num];
            break;
        case "bl":
            result = STATION_INFO['BL'][num];
            break;
        case "y":
            result = STATION_INFO['Y'][num];
            break;
    }

    $(".title-msg").text(result.STATION_NAME+"站");
}

function close_msg(str)
{
    switch(str)
    {
        case 'add-box':     
            $(".add-box").hide();
            break;
        case 'result-msg':        
            $(".result-msg").hide();
            break;
    }
}

//get seach data
function send(val = '')
{
    $.ajax(
        {
            url: "http://127.0.0.1:3000/station/get_info",
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            dataType: "text",
            data:
            {
                station:val
            },
            cache: false,
            success: res =>
            {
                create_result_element(JSON.parse(res)[0].data)
            },
            error: err =>
            {
                console.log('err', err)
            },
        }
    );
}

function create_result_element(arr)
{
    let the_html = `<ul>`;

    arr.map((e)=>
    {
        the_html += `<li><a href="https://www.google.com/maps/search/?api=1&query=${e.name}" target="_blank" >${e.name}</a></li>`;
    })

    the_html += `</ul>`;
    the_html += `
    <div class="flex-center">
        <button class="red-btn basic-btn" onclick="close_msg('result-msg')">關閉</button>
    </div>`

    $(".result-msg").html(the_html);
    $(".result-msg").show();
}