// Keep unfinished case-study sections out of the page and its generated table of contents.
// Also make Markdown images, links, and embedded video work on GitHub repository sites.
export default function projectMarkdown({base = '/'} = {}) {
  const prefix = base.replace(/\/$/, '');
  function withBase(value) {
    if (!prefix || !value?.startsWith('/') || value.startsWith('//') || value === prefix || value.startsWith(`${prefix}/`)) return value;
    return `${prefix}${value}`;
  }
  function substantive(node) {
    if (node.type === 'heading') return false;
    if (node.type === 'html') return Boolean(node.value.replace(/<!--[\s\S]*?-->/g, '').trim());
    if (node.type === 'text') return Boolean(node.value.trim());
    if (node.children) return node.children.some(substantive);
    return !['definition', 'yaml', 'toml'].includes(node.type);
  }
  return tree => {
    const children = tree.children;
    const empty = new Set();
    children.forEach((node, index) => {
      if (node.type !== 'heading') return;
      let end = index + 1;
      while (end < children.length && !(children[end].type === 'heading' && children[end].depth <= node.depth)) end++;
      if (!children.slice(index + 1, end).some(substantive)) empty.add(index);
    });
    tree.children = children.filter((_, index) => !empty.has(index));
    function visit(node) {
      if (node.type === 'link' || node.type === 'image' || node.type === 'definition') node.url = withBase(node.url);
      if (node.type === 'html') node.value = node.value.replace(/\b(src|href|poster)=(['"])(\/[^'"\s]*)\2/g, (_, attr, quote, value) => `${attr}=${quote}${withBase(value)}${quote}`);
      node.children?.forEach(visit);
    }
    visit(tree);
  };
}
