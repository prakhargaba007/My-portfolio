import Button from "./Button";
import "./FeedbackForm.css";

function FeedbackForm() {
  async function handleSubmit(e) {
    e.preventDefault();
    alert("Successfully Sent ");

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());

    const response = await fetch(
      "https://to-do-list-c24eb-default-rtdb.firebaseio.com/feedbacks.json",
      {
        method: "PUT",
        body: JSON.stringify({
          key: Math.random(),
          data: data,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Sending cart data failed.");
    }
  }

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h2>Feedback Form</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="name" name="name" required minLength={5} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required minLength={5} />
      </div>
      <div>
        <label htmlFor="Phone">Phone Number</label>
        <input id="Phone" type="tel" name="Phone" required minLength={6} />
      </div>
      <div>
        <label htmlFor="Query">Your Feedback/Query</label>
        <textarea
          name="Query"
          required
          id="Query"
          cols="30"
          rows="2"
        ></textarea>
      </div>
      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input
            type="checkbox"
            id="terms-and-conditions"
            required
            name="terms"
          />
          I agree to the terms and conditions
        </label>
      </div>
      <p>
        <Button type="reset">Reset</Button>
        <Button type="submit">Send Feedback/Query</Button>
      </p>
    </form>
  );
}

export default FeedbackForm;
