import { LanguageMapping } from "./language_mapping";

export interface DownloadFileParams {
  format: string;
  original_filenames?: boolean;
  bundle_structure?: string;
  directory_prefix?: string;
  all_platforms?: boolean;
  filter_langs?: string[];
  filter_data?: string[];
  filter_filenames?: string[];
  add_newline_eof?: boolean;
  custom_translation_status_ids?: string[] | number[];
  include_tags?: string[];
  exclude_tags?: string[];
  export_sort?: string;
  export_empty_as?: string;
  export_null_as?: string;
  include_comments?: boolean;
  include_description?: boolean;
  include_pids?: string[];
  triggers?: string[];
  filter_repositories?: string[];
  replace_breaks?: boolean;
  disable_references?: boolean;
  plural_format?: string;
  placeholder_format?: string;
  webhook_url?: string;
  language_mapping?: LanguageMapping[];
  icu_numeric?: boolean;
  escape_percent?: boolean;
  indentation?: string;
  yaml_include_root?: boolean;
  json_unescaped_slashes?: boolean;
  java_properties_encoding?: string;
  java_properties_separator?: string;
  bundle_description?: string;
  filter_task_id?: number;
}
