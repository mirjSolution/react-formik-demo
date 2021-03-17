import React from 'react';

function YoutubeForm() {
  return (
    <div>
      <form>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' />

        <label htmlFor='name'>Email</label>
        <input type='text' id='email' name='email' />

        <label htmlFor='name'>Channel</label>
        <input type='text' id='channel' name='channel' />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
