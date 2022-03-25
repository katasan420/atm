<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8"/>
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    <meta name="account-id" content=""/>
    <title>ATM</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- GoogleFonts -->
    <link href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('css/atm.css') }}"/>
</head>
<body>
    <div id="accountOpeningErea">
        <button id="accountOpening" class="btn">口座開設</button>
    </div>
    <div id="accountMenu" class="none">
        <nav>
            <h4>メニュー</h4>
            <ul>
                <li id="checkBalance" class="menuItem"><p>残高照会</p></li>
                <li id="deposit" class="menuItem"><p>預け入れ</p></li>
                <li id="withdrawal" class="menuItem"><p>引き出し</p></li>
            </ul>
        </nav>
        <div id="checkBalanceErea" class="content">
            <h1>残高照会</h1>
            <div>
                <p>現在の残高</p>
                <p><span>0</span>円</p>
            </div>
        </div>
        <div id="depositErea" class="content hasForm none">
            <h1>預け入れ</h1>
            <div>
                <p><input type="number"/>円</p>
                <button class="btn btn-primary">預け入れ</button>
            </div>
        </div>
        <div id="withdrawalErea" class="content hasForm none">
            <h1>引き出し</h1>
            <div>
                <p><input type="number"/>円</p>
                <button class="btn btn-primary">引き出し</button>
            </div>
        </div>
    </div>
</body>
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
<script src="{{ asset('js/atm.js') }}"></script>
</html>