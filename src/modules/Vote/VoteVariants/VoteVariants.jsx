import Button from '../../../shared/components/Button/Button';

const VoteVariants = ({ leaveVote }) => {
  return (
    <>
      <Button
        onClick={() => leaveVote('democrats')}
        text="Democrates:"
        type="button"
      >
        democrats
      </Button>

      <Button
        onClick={() => leaveVote('republicants')}
        text="Republicants:"
        type="button"
      >
        republicants
      </Button>
    </>
  );
};

export default VoteVariants;
