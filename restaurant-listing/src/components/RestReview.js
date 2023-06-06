import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";

function RestReview({ reviews }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="dark" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
        Client Reviews
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text" className="mt-2">
          {reviews?.map((review, index) => (
            <div key={index} className="border p-2 mt-2 rounded">
              <h6>
                {review.name}: ( {review.date})<p>Rating: {review.rating}</p>
                <p>Comment: {review.comments}</p>
              </h6>
            </div>
          ))}
        </div>
      </Collapse>
    </>
  );
}

export default RestReview;
