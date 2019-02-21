## Requirements
- jQuery >= v1.5

## Methods
### Articles
```js
VoogApi.getArticles(data, success, error);
VoogApi.createArticle(data, success, error);
VoogApi.getArticle(id, data, success, error);
VoogApi.updateArticle(id, data, success, error);
VoogApi.removeArticle(id, success, error);
```

### Content
#### Page Content
```js
VoogApi.getPageContents(data, success, error);
VoogApi.createPageContent(data, success, error);
VoogApi.getPageContent(id, data, success, error);
VoogApi.updatePageContent(id, data, success, error);
VoogApi.movePageContent(id, data, success, error);
VoogApi.removePageContent(id, data, success, error);
```

#### Language Content
```js
VoogApi.getLanguageContents(language_id, data, success, error);
VoogApi.createLanguageContent(language_id, data, success, error);
VoogApi.getLanguageContent(language_id, id, data, success, error);
VoogApi.updateLanguageContent(language_id, id, data, success, error);
VoogApi.moveLanguageContent(language_id, id, position, success, error);
VoogApi.removeLanguageContent(language_id, id, success, error);
```

#### Article Content
```js
VoogApi.getArticleContents(article_id, data, success, error);
VoogApi.createArticleContent(article_id, data, success, error);
VoogApi.getArticleContent(article_id, id, data, success, error);
VoogApi.updateArticleContent(article_id, id, data, success, error);
VoogApi.moveArticleContent(article_id, id, position, success, error);
VoogApi.removeArticleContent(article_id, id, success, error);
```

#### Element Content
```js
VoogApi.getElementContents(element_id, data, success, error);
VoogApi.createElementContent(element_id, data, success, error);
VoogApi.getElementContent(element_id, id, data, success, error);
VoogApi.updateElementContent(element_id, id, data, success, error);
VoogApi.moveElementContent(element_id, id, position, success, error);
VoogApi.removeElementContent(element_id, id, success, error);
```
