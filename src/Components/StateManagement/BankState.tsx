import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../Redux';
import { RootState } from '../../Redux/Reducers';

const BankState = () => {
    const state = useSelector((state: RootState) => state.bank)
    const dispatch = useDispatch();

    const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch)
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => depositMoney(1000)}>Deposit</button>
            <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
            <button onClick={() => bankrupt()}>Bankrupt</button>
        </div>
    )
}

export default BankState



