'use client';
import { Search } from 'lucide-react';
import { useRef } from 'react';
import { PROJECT_CATEGORIES } from '@/types/project';
import { TAG_CONFIG } from '@/types/tag';
import { ComboBox, MultiComboBox } from '../combobox';
import { Input } from '../ui/input';

const CATEGORY_OPTIONS = Object.entries(PROJECT_CATEGORIES).map(
  ([value, label]) => ({
    label,
    value,
  })
);

const TAG_OPTIONS = Object.entries(TAG_CONFIG).map(([value, config]) => ({
  label: config.name,
  value,
}));

type ProjectsFiltersProps = {
  categoryFilter: string;
  hasFilters: boolean;
  onCategoryChange: (value: string) => void;
  onClearFilters: () => void;
  onTagsChange: (values: string[]) => void;
  onTextChange: (value: string) => void;
  tagsFilter: string[];
  textFilter: string;
};

export function ProjectsFilters({
  categoryFilter,
  hasFilters,
  onCategoryChange,
  onClearFilters,
  onTagsChange,
  onTextChange,
  tagsFilter,
  textFilter,
}: ProjectsFiltersProps) {
  const userInitiatedChange = useRef(false);

  const handleSearchChange = (value: string) => {
    userInitiatedChange.current = true;
    onTextChange(value);
  };

  const handleCategoryChange = (value: string) => {
    userInitiatedChange.current = true;
    onCategoryChange(value);
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
          <ComboBox
            emptyStateMessage="No categories found."
            inputPlaceholder="Search categories..."
            options={CATEGORY_OPTIONS}
            placeholder="All Categories"
            setValue={handleCategoryChange}
            value={categoryFilter}
          />
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
            {categoryFilter &&
              ` • Category: ${CATEGORY_OPTIONS.find((c) => c.value === categoryFilter)?.label}`}
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
