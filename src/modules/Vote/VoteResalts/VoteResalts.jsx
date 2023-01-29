const VoteResalts = ({ total, democrateProcent, republicantsProcent }) => {
  return (
    <>
      <p>Total votes: {total}</p>
      <p>Democrats: {democrateProcent}</p>
      <p>Republicants: {republicantsProcent} </p>
    </>
  );
};

export default VoteResalts;
