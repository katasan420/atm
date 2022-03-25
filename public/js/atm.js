$(function(){
    // メニュークリック時の切り替えイベントを設定する
    $(".menuItem").on("click", function(){
        switchingShowContent(this);
    });

    // 口座開設ボタンクリック時の画面切り替えイベントを設定する
    $("#accountOpening").on("click", function(){
        $("#accountOpeningErea").addClass("none");
        $("#accountMenu").removeClass("none");
        accountOpening();
    });

    $("#depositErea button").on("click", function(){
        depositMoney();
    })

    $("#withdrawalErea button").on("click", function(){
        withdrawal();
    })
});

// メニューを選択した時の画面表示の切り替え
// 引数はクリックされたDOM自身が入ってくるのを想定しておく
function switchingShowContent(targetElement){
    classInit();
    // id名を自身から取得して、removeClassする対象を決定する
    let idName = $(targetElement).attr("id");
    $("#" + idName + "Erea").removeClass("none");
    if(idName === "checkBalance"){
        balanceReference();
    }
}

// classがあるので、それを利用して一括でcss反映
function classInit(){
    $(".content").addClass("none");
}

function accountOpening(){
    $.ajax({
        type: "post",
        url: "bankTrading/accountOpening",
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    })
    .done(function(response){
        $('meta[name="account-id"]').attr('content', response["id"])
        balanceReference()
    })
    .fail(function(response){
        console.log(response)
    });
}

function balanceReference(){
    $.ajax({
        type: "get",
        url: "bankTrading/" + $('meta[name="account-id"]').attr('content')
    })
    .done(function(response){
        $("#checkBalanceErea span").text(response)
    })
    .fail(function(response){
        console.log(response)
    });
}

function depositMoney(){
    let requestDate = {
        "amount": parseInt($('#depositErea input[type="number"]').val())
    };
    $.ajax({
        type: "post",
        url: "bankTrading/depositMoney/" + $('meta[name="account-id"]').attr('content'),
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
            'Content-Type': "application/json"
        },
        data: JSON.stringify(requestDate)
    })
    .done(function(response){
        console.log("残高は" + response + "円です")
    })
    .fail(function(response){
        console.log(response)
    });
}

function withdrawal(){
    let requestDate = {
        "amount": parseInt($('#withdrawalErea input[type="number"]').val())
    };
    $.ajax({
        type: "post",
        url: "bankTrading/withdrawal/" + $('meta[name="account-id"]').attr('content'),
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
            'Content-Type': "application/json"
        },
        data: JSON.stringify(requestDate)
    })
    .done(function(response){
        console.log("残高は" + response + "円です")
    })
    .fail(function(response){
        console.log(response)
    });
}