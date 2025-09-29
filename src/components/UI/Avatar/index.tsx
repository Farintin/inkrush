import type { ComponentProps, UserType } from "@/types";

export type AvatarProps = {
  profile: UserType;
  width?: number;
} & ComponentProps;

export const ActiveAvatar = ({ className, ...restProps }: AvatarProps) => {
  return (
    <Avatar
      className={`active border-[1px] border-cyan-300 ${className}`}
      {...restProps}
    />
  );
};

export const StatusAvatar = (props: { profile: UserType } & ComponentProps) => {
  const { profile, className, ...restProps } = props;
  const { name } = profile;
  return (
    <div
      className={`comp-StatusAvatar flex flex-col items-center ${className}`}
    >
      <ActiveAvatar profile={profile} width={48} {...restProps} />
      <p className="text name my-2 capitalize">{name.substring(0, 8)}...</p>
    </div>
  );
};

export default function Avatar({
  profile,
  width = 51,
  className,
  ...restProps
}: AvatarProps) {
  const { profilePic } = profile;
  className = `comp-Avatar h-fit aspect-square 
       rounded-full 
       p-0.5 ${className}
       `;

  return (
    <div
      className={className}
      style={{
        width: `${width}px`,
      }}
      {...restProps}
    >
      <img
        src={profilePic}
        className="w-full h-full rounded-full object-cover"
        alt="avatar"
      />
    </div>
  );
}
