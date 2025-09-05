'use client';
import { Search } from 'lucide-react';
import { useRef } from 'react';
import { TAG_CONFIG } from '@/lib/tag';
import { MultiComboBox } from '../combobox';
import { Input } from '../ui/input';

const TAG_OPTIONS = Object.entries(TAG_CONFIG).map(([value, config]) => ({
  label: config.name,
  value,
}));

type ArticleFilterProps = {
  hasFilters: boolean;
  onTextChange: (text: string) => void;
  onTagsChange: (tags: string[]) => void;
  onClearFilters: () => void;
  textFilter: string;
  tagsFilter: string[];
};

export function ArticleFilter({
  hasFilters,
  onTextChange,
  onTagsChange,
  textFilter,
  tagsFilter,
  onClearFilters,
}: ArticleFilterProps) {
  const userInitiatedChange = useRef(false);

  const handleSearchChange = (value: string) => {
    userInitiatedChange.current = true;
    onTextChange(value);
  };

  const handleTagsChange = (values: string[]) => {
    userInitiatedChange.current = true;
    onTagsChange(values);
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full items-center gap-4">
        <div className="relative flex flex-1">
          <Input
            className="peer w-full bg-background pl-8"
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search projects..."
            type="text"
            value={textFilter}
          />
          <Search className="-translate-y-1/2 absolute top-1/2 left-2 size-4 peer-focus:text-primary" />
        </div>

        <div className="min-w-48">
          <MultiComboBox
            emptyStateMessage="No tags found."
            inputPlaceholder="Search tags..."
            options={TAG_OPTIONS}
            placeholder="Filter by Tags"
            setValue={handleTagsChange}
            values={tagsFilter}
          />
        </div>
      </div>

      {hasFilters && (
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground text-sm">
            {textFilter && `Text: "${textFilter}"`}
            {tagsFilter.length > 0 && ` • Tags: ${tagsFilter.length} selected`}
          </p>
          <button
            className="text-muted-foreground text-sm underline hover:text-foreground"
            onClick={onClearFilters}
            type="button"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
