import { Slider, TextInput } from "./form";
import PropTypes from "prop-types";

export default function BucketForm({ handleSubmit }) {
  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
      <TextInput
        label="Bucket Text"
        id="bucketText"
        placeholder="Add to your bucket list"
      />
      <Slider label="Importance" min={1} max={3} id="importance" />
      <button
        type="submit"
        className="rounded bg-blue-500 py-2 transition-colors hover:bg-blue-400 focus:bg-blue-300"
      >
        Add 🪣
      </button>
    </form>
  );
}

BucketForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
