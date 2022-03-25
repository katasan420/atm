<?php
namespace App\Http\Controllers;

use App\BankAccount;
use Illuminate\Http\Request;

class AtmController extends Controller{

    public function index(){
        return view("index");
    }

    public function createToken(){
        return csrf_field();
    }

    public function accountOpen(){
        $account = new BankAccount();
        $account->deposit_balance = 0;
        $account->save();
        return response()->json($account);
    }

    public function balanceReference($accountId){
        $account = BankAccount::find($accountId);
        $deposit = $account->deposit_balance;
        return response()->json($deposit);
    }

    public function deposit(Request $request, $accountId){
        $account = BankAccount::find($accountId);
        $deposit = $account->deposit_balance += $request->amount;
        $account->save();
        return response($deposit);
    }

    public function withdrawal(Request $request, $accountId){
        $account = BankAccount::find($accountId);
        if($account->deposit_balance >= $request->amount){
            $deposit = $account->deposit_balance -= $request->amount;
            $account->save();
        }else{
            $deposit = $account->deposit_balance;
        }
        return response()->json($deposit);
    }
}