import { Form } from "react-router-dom";

const GptSearchBar = () => {
  return (
    <div className=" pt-[10%] flex justify-center">
      <Form className=" w-1/2  bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="What do you want to watch today?"
        />

        <button className=" col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          Search
        </button>
      </Form>
    </div>
  );
};

export default GptSearchBar;
