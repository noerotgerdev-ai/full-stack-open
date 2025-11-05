const FindForm = ({value, handleChange}) => {
  return (
    <form>
        find countries <input value={value} onChange={handleChange} />
    </form>
  )
}
export default FindForm