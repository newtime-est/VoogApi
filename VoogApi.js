if (!window.location.origin) {
    window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}

var VoogApi = {
    _getBaseUrl: function() {
        return window.location.origin + '/admin/api/';
    },

    _sendRequest: function(url, method, data, successCb, errorCb) {
        if (method === 'GET') {
            if (data.constructor === Object) {
                for (var key in data) {
                    if (data[key].constructor === Array) {
                        for (var i in data[key]) {
                            url = (url += ((/\?/).test(url)) ? '&' : '?') + key + '[]=' + data[key][i];
                        }
                    } else {
                        url = (url += ((/\?/).test(url)) ? '&' : '?') + key + '=' + data[key];
                    }
                }

                data = null;
            } else if (typeof data === 'string') {
                url = (url += ((/\?/).test(url)) ? '&' : '?') + (/\?|\&/.test(data.substr(0, 1)) ? data.substr(1) : data);
            }
        }

        $.ajax({
            url: url,
            type: method,
            data: data ? JSON.stringify(data) : null,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: false,
            success: function (response) {
                if (typeof successCb === 'function') {
                    successCb(response);
                }
            },
            error: function (response) {
                if (typeof errorCb === 'function') {
                    errorCb(response);
                } else {
                    console.log('error', response);
                }
            }
        });
    },

    /* Voog Articles Requests */
    /* ====================================================================== */
    getArticles: function(data, success, error) {
        var url = this._getBaseUrl() + 'articles';
        this._sendRequest(url, 'GET', data, success, error);
    },

    createArticle: function(data, success, error) {
        var url = this._getBaseUrl() + 'articles';
        this._sendRequest(url, 'POST', data, success, error);
    },

    getArticle: function(id, data, success, error) {
        var url = this._getBaseUrl() + 'articles/' + id;
        this._sendRequest(url, 'GET', data, success, error);
    },

    updateArticle: function(id, data, success, error) {
        var url = this._getBaseUrl() + 'articles/' + id;
        this._sendRequest(url, 'PATCH', data, success, error);
    },

    removeArticle: function(id, success, error) {
        var url = this._getBaseUrl() + 'articles/' + id;
        this._sendRequest(url, 'DELETE', null, success, error);
    },

    /* Voog Contents Requests */
    /* ====================================================================== */
    /* Page Content Requests */
    /* ---------------------------------------------------------------------- */
    getPageContents: function(page_id, data, success, error) {
        var url = this._getBaseUrl() + 'pages/' + page_id + '/contents';
        this._sendRequest(url, 'GET', data, success, error);
    },

    createPageContent: function(page_id, data, success, error) {
        var url = this._getBaseUrl() + 'pages/' + page_id + '/contents';
        this._sendRequest(url, 'POST', data, success, error);
    },

    getPageContent: function(page_id, id, data, success, error) {
        var url = this._getBaseUrl() + 'pages/' + page_id + '/contents/' + id;
        this._sendRequest(url, 'GET', data, success, error);
    },

    updatePageContent: function(page_id, id, data, success, error) {
        var url = this._getBaseUrl() + 'pages/' + page_id + '/contents/' + id;
        this._sendRequest(url, 'PUT', data, success, error);
    },

    movePageContent: function(page_id, id, position, success, error) {
        var url = this._getBaseUrl() + 'pages/' + page_id + '/contents/' + id + '/move?before=' + position;
        this._sendRequest(url, 'PUT', null, success, error);
    },

    removePageContent: function(page_id, id, success, error) {
        var url = this._getBaseUrl() + 'pages/' + page_id + '/contents/' + id;
        this._sendRequest(url, 'DELETE', null, success, error);
    },

    /* Language Content Requests */
    /* ---------------------------------------------------------------------- */
    getLanguageContents: function(language_id, data, success, error) {
        var url = this._getBaseUrl() + 'languages/' + language_id + '/contents';
        this._sendRequest(url, 'GET', data, success, error);
    },

    createLanguageContent: function(language_id, data, success, error) {
        var url = this._getBaseUrl() + 'languages/' + language_id + '/contents';
        this._sendRequest(url, 'POST', data, success, error);
    },

    getLanguageContent: function(language_id, id, data, success, error) {
        var url = this._getBaseUrl() + 'languages/' + language_id + '/contents/' + id;
        this._sendRequest(url, 'GET', data, success, error);
    },

    updateLanguageContent: function(language_id, id, data, success, error) {
        var url = this._getBaseUrl() + 'languages/' + language_id + '/contents/' + id;
        this._sendRequest(url, 'PUT', data, success, error);
    },

    moveLanguageContent: function(language_id, id, position, success, error) {
        var url = this._getBaseUrl() + 'languages/' + language_id + '/contents/' + id + '/move?before=' + position;
        this._sendRequest(url, 'PUT', null, success, error);
    },

    removeLanguageContent: function(language_id, id, success, error) {
        var url = this._getBaseUrl() + 'languages/' + language_id + '/contents/' + id;
        this._sendRequest(url, 'DELETE', null, success, error);
    },

    /* Article Content Requests */
    /* ---------------------------------------------------------------------- */
    getArticleContents: function(article_id, data, success, error) {
        var url = this._getBaseUrl() + 'articles/' + article_id + '/contents';
        this._sendRequest(url, 'GET', data, success, error);
    },

    createArticleContent: function(article_id, data, success, error) {
        var url = this._getBaseUrl() + 'articles/' + article_id + '/contents';
        this._sendRequest(url, 'POST', data, success, error);
    },

    getArticleContent: function(article_id, id, data, success, error) {
        var url = this._getBaseUrl() + 'articles/' + article_id + '/contents/' + id;
        this._sendRequest(url, 'GET', data, success, error);
    },

    updateArticleContent: function(article_id, id, data, success, error) {
        var url = this._getBaseUrl() + 'articles/' + article_id + '/contents/' + id;
        this._sendRequest(url, 'PUT', data, success, error);
    },

    moveArticleContent: function(article_id, id, position, success, error) {
        var url = this._getBaseUrl() + 'articles/' + article_id + '/contents/' + id + '/move?before=' + position;
        this._sendRequest(url, 'PUT', null, success, error);
    },

    removeArticleContent: function(article_id, id, success, error) {
        var url = this._getBaseUrl() + 'articles/' + article_id + '/contents/' + id;
        this._sendRequest(url, 'DELETE', null, success, error);
    },

    /* Element Content Requests */
    /* ---------------------------------------------------------------------- */
    getElementContents: function(element_id, data, success, error) {
        var url = this._getBaseUrl() + 'elements/' + element_id + '/contents';
        this._sendRequest(url, 'GET', data, success, error);
    },

    createElementContent: function(element_id, data, success, error) {
        var url = this._getBaseUrl() + 'elements/' + element_id + '/contents';
        this._sendRequest(url, 'POST', data, success, error);
    },

    getElementContent: function(element_id, id, data, success, error) {
        var url = this._getBaseUrl() + 'elements/' + element_id + '/contents/' + id;
        this._sendRequest(url, 'GET', data, success, error);
    },

    updateElementContent: function(element_id, id, data, success, error) {
        var url = this._getBaseUrl() + 'elements/' + element_id + '/contents/' + id;
        this._sendRequest(url, 'PUT', data, success, error);
    },

    moveElementContent: function(element_id, id, position, success, error) {
        var url = this._getBaseUrl() + 'elements/' + element_id + '/contents/' + id + '/move?before=' + position;
        this._sendRequest(url, 'PUT', null, success, error);
    },

    removeElementContent: function(element_id, id, success, error) {
        var url = this._getBaseUrl() + 'elements/' + element_id + '/contents/' + id;
        this._sendRequest(url, 'DELETE', null, success, error);
    },

    /* Voog Element Definitions Requests */
    /* ====================================================================== */
    getElementDefinitions: function(data, success, error) {
        var url = this._getBaseUrl() + 'element_definitions';
        this._sendRequest(url, 'GET', data, success, error);
    },

    createElementDefinition: function(data, success, error) {
        var url = this._getBaseUrl() + 'element_definitions';
        this._sendRequest(url, 'POST', data, success, error);
    },

    getElementDefinition: function(id, data, success, error) {
        var url = this._getBaseUrl() + 'element_definitions/' + id;
        this._sendRequest(url, 'GET', data, success, error);
    },

    updateElementDefinition: function(id, data, success, error) {
        var url = this._getBaseUrl() + 'element_definitions/' + id;
        this._sendRequest(url, 'PUT', data, success, error);
    },

    removeElementDefinition: function(id, success, error) {
        var url = this._getBaseUrl() + 'element_definitions/' + id;
        this._sendRequest(url, 'DELETE', null, success, error);
    },

    /* Voog Elements Requests */
    /* ====================================================================== */
    getElements: function(data, success, error) {
        var url = this._getBaseUrl() + 'elements';
        this._sendRequest(url, 'GET', data, success, error);
    },

    createElement: function(data, success, error) {
        var url = this._getBaseUrl() + 'elements';
        this._sendRequest(url, 'POST', data, success, error);
    },

    getElement: function(id, data, success, error) {
        var url = this._getBaseUrl() + 'elements/' + id;
        this._sendRequest(url, 'GET', data, success, error);
    },

    updateElement: function(id, data, success, error) {
        var url = this._getBaseUrl() + 'elements/' + id;
        this._sendRequest(url, 'PUT', data, success, error);
    },

    moveElement: function(id, position, success, error) {
        var url = this._getBaseUrl() + 'elements/' + id + '/move?before=' + position;
        this._sendRequest(url, 'PUT', null, success, error);
    },

    removeElement: function(id, success, error) {
        var url = this._getBaseUrl() + 'elements/' + id;
        this._sendRequest(url, 'DELETE', null, success, error);
    },

    /* Voog Forms Requests */
    /* ====================================================================== */
    getForms: function(data, success, error) {
        var url = this._getBaseUrl() + 'forms';
        this._sendRequest(url, 'GET', data, success, error);
    },

    getForm: function(id, data, success, error) {
        var url = this._getBaseUrl() + 'forms/' + id;
        this._sendRequest(url, 'GET', data, success, error);
    },

    updateForm: function(id, data, success, error) {
        var url = this._getBaseUrl() + 'forms/' + id;
        this._sendRequest(url, 'PUT', data, success, error);
    },

    removeForm: function(id, success, error) {
        var url = this._getBaseUrl() + 'forms/' + id;
        this._sendRequest(url, 'DELETE', null, success, error);
    },

    /* Voog Languages Requests */
    /* ====================================================================== */
    getLanguages: function(data, success, error) {
        var url = this._getBaseUrl() + 'languages';
        this._sendRequest(url, 'GET', data, success, error);
    },

    createLanguage: function(data, success, error) {
        var url = this._getBaseUrl() + 'languages';
        this._sendRequest(url, 'POST', data, success, error);
    },

    getLanguage: function(id, data, success, error) {
        var url = this._getBaseUrl() + 'languages/' + id;
        this._sendRequest(url, 'GET', data, success, error);
    },

    updateLanguage: function(id, data, success, error) {
        var url = this._getBaseUrl() + 'languages/' + id;
        this._sendRequest(url, 'PUT', data, success, error);
    },

    removeLanguage: function(id, success, error) {
        var url = this._getBaseUrl() + 'languages/' + id;
        this._sendRequest(url, 'DELETE', null, success, error);
    },

    moveLanguage: function(id, position, success, error) {
        var url = this._getBaseUrl() + 'languages/' + id + '/move?before=' + position;
        this._sendRequest(url, 'PUT', null, success, error);
    },

    setAutoDetectLanguage: function(id, success, error) {
        var url = this._getBaseUrl() + 'languages/' + id + '/enable_autodetect';
        this._sendRequest(url, 'PUT', null, success, error);
    },

    /* Voog Layouts Requests */
    /* ====================================================================== */
    getLayouts: function(data, success, error) {
        var url = this._getBaseUrl() + 'layouts';
        this._sendRequest(url, 'GET', data, success, error);
    },

    createLayout: function(data, success, error) {
        var url = this._getBaseUrl() + 'layouts';
        this._sendRequest(url, 'POST', data, success, error);
    },

    getLayout: function(id, data, success, error) {
        var url = this._getBaseUrl() + 'layouts/' + id;
        this._sendRequest(url, 'GET', data, success, error);
    },

    updateLayout: function(id, data, success, error) {
        var url = this._getBaseUrl() + 'layouts/' + id;
        this._sendRequest(url, 'PUT', data, success, error);
    },

    removeLayout: function(id, success, error) {
        var url = this._getBaseUrl() + 'layouts/' + id;
        this._sendRequest(url, 'DELETE', null, success, error);
    },

    /* Voog Nodes Requests */
    /* ====================================================================== */
    getNodes: function(data, success, error) {
        var url = this._getBaseUrl() + 'nodes';
        this._sendRequest(url, 'GET', data, success, error);
    },

    getNode: function(id, data, success, error) {
        var url = this._getBaseUrl() + 'nodes/' + id;
        this._sendRequest(url, 'GET', data, success, error);
    },

    updateNode: function(id, data, success, error) {
        var url = this._getBaseUrl() + 'nodes/' + id;
        this._sendRequest(url, 'PUT', data, success, error);
    },

    moveNode: function(id, parent_id, position, success, error) {
        var url = this._getBaseUrl() + 'nodes/' + id + '/move?parent_id=' + parent_id + '&before=' + position;
        this._sendRequest(url, 'PUT', null, success, error);
    },

    /* Voog Pages Requests */
    /* ====================================================================== */
    getPages: function(data, success, error) {
        var url = this._getBaseUrl() + 'pages';
        this._sendRequest(url, 'GET', data, success, error);
    },

    createPage: function(data, success, error) {
        var url = this._getBaseUrl() + 'pages';
        this._sendRequest(url, 'POST', data, success, error);
    },

    getPage: function(id, data, success, error) {
        var url = this._getBaseUrl() + 'pages/' + id;
        this._sendRequest(url, 'GET', data, success, error);
    },

    updatePage: function(id, data, success, error) {
        var url = this._getBaseUrl() + 'pages/' + id;
        this._sendRequest(url, 'PUT', data, success, error);
    },

    removePage: function(id, success, error) {
        var url = this._getBaseUrl() + 'pages/' + id;
        this._sendRequest(url, 'DELETE', null, success, error);
    },

    /* Voog People Requests */
    /* ====================================================================== */
    getAccounts: function(data, success, error) {
        var url = this._getBaseUrl() + 'people';
        this._sendRequest(url, 'GET', data, success, error);
    },

    getAccount: function(id, data, success, error) {
        var url = this._getBaseUrl() + 'people/' + id;
        this._sendRequest(url, 'GET', data, success, error);
    },

    /* Voog Search Requests */
    /* ====================================================================== */
    search: function(data, success, error) {
        var url = this._getBaseUrl() + 'search';
        this._sendRequest(url, 'GET', data, success, error);
    },

    /* Voog Site Requests */
    /* ====================================================================== */
    getSite: function(data, success, error) {
        var url = this._getBaseUrl() + 'site';
        this._sendRequest(url, 'GET', data, success, error);
    },

    updateSite: function(data, success, error) {
        var url = this._getBaseUrl() + 'site';
        this._sendRequest(url, 'PATCH', data, success, error);
    },

    /* Voog Users Requests */
    /* ====================================================================== */
    getUsers: function(data, success, error) {
        var url = this._getBaseUrl() + 'site_users';
        this._sendRequest(url, 'GET', data, success, error);
    },

    createUser: function(data, success, error) {
        var url = this._getBaseUrl() + 'site_users';
        this._sendRequest(url, 'POST', data, success, error);
    },

    getUser: function(id, data, success, error) {
        var url = this._getBaseUrl() + 'site_users/' + id;
        this._sendRequest(url, 'GET', data, success, error);
    },

    removeUser: function(id, success, error) {
        var url = this._getBaseUrl() + 'site_users/' + id;
        this._sendRequest(url, 'DELETE', null, success, error);
    },
};
