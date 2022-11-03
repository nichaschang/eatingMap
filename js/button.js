//add button
$(".blue-btn").on("click",()=>
{
    $(".add-box").show();
})

//search button
$(".search-btn").on("click",()=>
{
    $(".msg-alert").hide();
    send($("#target").val())
})

// close button
$(".red-btn").on("click",()=>
{
    $(".msg-alert").hide();
})

$(".yellow-box").each(function (i)
{
    $(this).on("click",()=>
    {
        btn_action($(this))
    })
})
$(".red-box").each(function (i)
{
    $(this).on("click",()=>
    {
        btn_action($(this))
    })
})
$(".blue-box").each(function (i)
{
    $(this).on("click",()=>
    {
        btn_action($(this))
    })
})
$(".green-box").each(function (i)
{
    $(this).on("click",()=>
    {
        btn_action($(this))
    })
})
$(".orange-box").each(function (i)
{
    $(this).on("click",()=>
    {
        btn_action($(this))
    })
})
$(".brown-box").each(function (i)
{
    $(this).on("click",()=>
    {
        btn_action($(this))
    })
})