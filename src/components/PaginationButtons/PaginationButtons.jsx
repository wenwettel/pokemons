import ButtonStyle from "./ButtonStyle";
import Link from "next/link";
function PaginationButtons({ prevHref, nextHref }) {
  return (
    <ButtonStyle>
      {prevHref && (
        <Link href={prevHref}>
          <button>PREVIOUS</button>
        </Link>
      )}
      {nextHref && (
        <Link href={nextHref}>
          <button className="next">NEXT</button>
        </Link>
      )}
    </ButtonStyle>
  );
}

export default PaginationButtons;
