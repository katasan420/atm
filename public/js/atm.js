$(function(){
    // メニュークリック時の切り替えイベントを設定する
    $(".menuItem").on("click", function(){
        switchingShowContent(this);
    });

    // 口座開設ボタンクリック時の画面切り替えイベントを設定する
    $("#accountOpening").on("click", function(){
        $("#accountOpeningErea").addClass("none");
        $("#accountMenu").removeClass("none");
        accountOpening()
    });
});

// メニューを選択した時の画面表示の切り替え
// 引数はクリックされたDOM自身が入ってくるのを想定しておく
function switchingShowContent(targetElement){
    classInit();
    // id名を自身から取得して、removeClassする対象を決定する
    let idName = $(targetElement).attr("id");
    $("#" + idName + "Erea").removeClass("none");
    if(idName === "checkBalance"){
        balanceReference()
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
    .done(function(responce){
        $('meta[name="account-id"]').attr('content', responce["id"])
        balanceReference()
    })
    .fail(function(){
        console.log(responce)
    });
}

function balanceReference(){
    $.ajax({
        type: "get",
        url: "bankTrading/" + $('meta[name="account-id"]').attr('content')
    })
    .done(function(responce){
        $(".checkBalanceErea", "span").text(responce["deposit_balance"])
    })
    .fail(function(){
        console.log(responce)
    });
}