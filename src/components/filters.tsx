import Collapsible from "react-collapsible";

function Filters() {
  return (
    <>
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
    </>
  );
}

export default Filters;
