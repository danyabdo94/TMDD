import React from "react";
import Collapsible from "react-collapsible";

function MoviesList() {
  return (
    <main className="w-full mt-24 sm:mt-16 min-h-full px-10 py-8">
      <h2 className="text-2xl font-semibold mb-5">Popular Movies</h2>
      <div className="w-full flex">
        <div className="min-w-1/5 w-1/5">
          <Collapsible trigger="Sort" transitionTime={20}>
            <p>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
          </Collapsible>

          <Collapsible trigger="Filters" transitionTime={20} className="mt-3">
            <p>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
          </Collapsible>

          <Collapsible
            trigger="Where to watch"
            transitionTime={20}
            className="mt-3"
          >
            <p>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
          </Collapsible>
        </div>
        <div className="pl-8">Movies</div>
      </div>
    </main>
  );
}

export default MoviesList;
