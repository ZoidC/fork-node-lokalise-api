import { SupportedPlatforms } from "../types/supported_platforms";
import { Filenames } from "../types/filenames";
import { CommentData } from "../types/comment_data";
import { ScreenshotData } from "../types/screenshot_data";
import { TranslationData } from "../types/translation_data";
import { Filenames as Keynames } from "../types/filenames";
export declare type CreateKeyData = {
    key_name: string | Keynames;
    description?: string;
    platforms: SupportedPlatforms[];
    filenames?: Filenames;
    tags?: string[];
    comments?: CommentData[];
    screenshots?: ScreenshotData[];
    translations?: TranslationData[];
    is_plural?: boolean;
    plural_name?: string;
    is_hidden?: boolean;
    is_archived?: boolean;
    context?: string;
    char_limit?: number;
    custom_attributes?: string;
};
