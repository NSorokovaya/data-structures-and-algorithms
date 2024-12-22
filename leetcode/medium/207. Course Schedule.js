var canFinish = function (numCourses, prerequisites) {
  let visited = new Set();
  let visiting = new Set();
  let map = new Map();

  for (let [course, prereq] of prerequisites) {
    if (!map.has(course)) {
      map.set(course, []);
    }
    map.get(course).push(prereq);
  }

  const dfs = (course) => {
    if (visiting.has(course)) return false;
    if (visited.has(course)) return true;

    visiting.add(course);

    for (let prereq of map.get(course) || []) {
      if (!dfs(prereq)) return false;
    }

    visiting.delete(course);
    visited.add(course);

    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
};

//check again later
