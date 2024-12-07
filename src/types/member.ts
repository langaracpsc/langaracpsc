export interface SocialMediaLinks {
  [key: string]: string;
}
export interface Executive {
  name: string;
  pronouns: string | null;
  profile_picture: string | null;
  social_media_links: SocialMediaLinks;
  bio: string | null;
  roles: string[];
  prior_roles: string[];
  first_term: string | null;
  last_term: string | null;
  current_status: string | null;
  id: string;
  last_edited_time: string;
}