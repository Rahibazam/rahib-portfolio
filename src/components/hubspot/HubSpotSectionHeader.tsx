import { HeadingAccent, HomeSectionHeader } from '@/components/home/HomeSectionHeader';

type HubSpotSectionHeaderProps = {
  title: string;
  description: string;
  personalityLabel?: string;
  className?: string;
};

export function HubSpotSectionHeader({ title, description, personalityLabel, className }: HubSpotSectionHeaderProps) {
  const words = title.trim().split(/\s+/);
  const accentWord = words.pop();

  return (
    <HomeSectionHeader
      className={className}
      title={
        <>
          {words.join(' ')}{words.length ? ' ' : ''}
          <HeadingAccent>{accentWord}</HeadingAccent>
        </>
      }
      description={description}
      personalityLabel={personalityLabel}
    />
  );
}
