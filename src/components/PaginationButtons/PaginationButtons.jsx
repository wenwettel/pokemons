import ButtonStyle from "./PaginationButtonStyle";
import Link from "next/link";
function PaginationButtons({ prevHref, nextHref, prevText, nextText }) {
  return (
    <ButtonStyle>
      {prevHref && (
        <Link href={prevHref}>
          <button>{prevText}</button>
        </Link>
      )}
      {nextHref && (
        <Link href={nextHref}>
          <button className="next">{nextText}</button>
        </Link>
      )}
    </ButtonStyle>
  );
}

export default PaginationButtons;
