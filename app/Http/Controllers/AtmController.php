<?php
namespace App\Http\Controllers;

use App\BankAccount;

class AtmController extends Controller{

    public function createToken(){
        return csrf_field();
    }

    public function accountOpen(){
        $account = new BankAccount();
        $account->deposit_balance = 0;
        $account->save();
        return response()->json($account->deposit_balance);
    }
}