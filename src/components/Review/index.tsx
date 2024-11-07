import Avatar from "@mui/material/Avatar";
import { Rating } from "@mui/material";

interface ReviewProps {
  name: string;
  stars: number;
  text: string;
  date: string;
  src?: string;
  reviewIconColor: string;
}

const Review: React.FC<ReviewProps> = ({
  name,
  reviewIconColor,
  stars,
  text,
  date,
  src,
}) => {
  const avatarName = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-[14px] items-center mb-[10px]">
        <Avatar
          src={src}
          sx={{ bgcolor: `${reviewIconColor}` }}
          className="w-10 h-10"
        >
          {avatarName}
        </Avatar>
        <div className="font-roboto font-normal text-main text-[0.875rem] leading-[1.25rem]">
          {name}
        </div>
      </div>
      <div className="flex gap-[0.5em] items-center">
        <Rating
          name="half-rating-read"
          defaultValue={stars}
          precision={1}
          readOnly
          sx={{ color: "#1357CD", fontSize: "14px" }}
        />
        <div className="leading-4 text-[#605D64] text-xs mb-2.5">{date}</div>
      </div>
      <div
        className="font-normal text-sm leading-5 text-[#322F35] text-justify"
        style={{
          textOverflow: "ellipsis",
          letterSpacing: "0.0142857143em",
          overflowWrap: "anywhere",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Review;
