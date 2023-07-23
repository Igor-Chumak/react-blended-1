import { changeFormatDate } from 'utils/utils';
import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import PropTypes from 'prop-types'

export const CryptoHistory = ({ transactions }) => {
  return (<BaseTable>
  <THead>
    <tr>
      <Th>№</Th>
      <Th>PRICE</Th>
      <Th>AMOUNT</Th>
      <Th>DATE</Th>
    </tr>
  </THead>

    <tbody>
      {transactions.map((transActionItem, TransActionIndex) => (<Tr key={transActionItem.id}>
        <Td>{ TransActionIndex + 1}</Td>
        <Td>{ transActionItem.price}</Td>
      <Td>{transActionItem.amount}</Td>
      <Td>{changeFormatDate (transActionItem.date)}</Td>
    </Tr>))}
  </tbody>
</BaseTable>);
};

CryptoHistory.propTypes= {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired
    }
    )
  ).isRequired
}