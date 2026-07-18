import { describe, expect, it } from "vitest";
import {
  findProjectBySlug,
  getProjectPath,
  getProjectsByCategory,
  projectCategories,
  projects,
} from "../data/projects";

describe("project lookup", () => {
  it("resolves every canonical project slug", () => {
    for (const project of projects) {
      expect(findProjectBySlug(project.slug)).toBe(project);
    }
  });

  it("resolves the published legacy alias", () => {
    const project = findProjectBySlug("oh-dear-dragon");

    expect(project?.slug).toBe("game-oh-dear-dragon");
    expect(project && getProjectPath(project)).toBe("/projects/oh-dear-dragon");
  });

  it("returns undefined for missing or unknown slugs", () => {
    expect(findProjectBySlug(undefined)).toBeUndefined();
    expect(findProjectBySlug("not-a-real-project")).toBeUndefined();
  });
});

describe("project categories", () => {
  it("places every project in exactly one configured category", () => {
    const groupedProjects = projectCategories.flatMap((category) => getProjectsByCategory(category));

    expect(groupedProjects).toHaveLength(projects.length);
    expect(new Set(groupedProjects)).toEqual(new Set(projects));
  });
});
