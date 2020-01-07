<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes"/>
  <xsl:variable name="box-x"><xsl:text>⊠</xsl:text></xsl:variable>
  <xsl:variable name="box-dash"><xsl:text>⊟</xsl:text></xsl:variable>
  <xsl:variable name="box-dot"><xsl:text>⊡</xsl:text></xsl:variable>
  <xsl:variable name="note-fields"><xsl:text>features,armor-proficiencies,weapon-proficiencies,special-items,languages,equiptment,blank,classes,race,background,blank,blank,blank,blank,blank,character-name,classes,code,code,code,code,code,code</xsl:text></xsl:variable>
  <xsl:template match="/">
    <xsl:element name="html">
      <xsl:element name="head">
        <xsl:element name="title">Character Sheets</xsl:element>
        <xsl:element name="link">
          <xsl:attribute name="rel"><xsl:text>stylesheet</xsl:text></xsl:attribute>
          <xsl:attribute name="href"><xsl:text>https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css</xsl:text></xsl:attribute>
        </xsl:element>
        <xsl:element name="style"><xsl:text>
.header-table {
  width: 100%;
}
.header-table th {
  text-align: right;
}
</xsl:text></xsl:element>
      </xsl:element>
      <xsl:element name="body">
        <xsl:element name="div">
          <xsl:attribute name="class"><xsl:text>container-fluid</xsl:text></xsl:attribute>
          <xsl:for-each select="//character">
            <xsl:call-template name="char-sheet">
              <xsl:with-param name="character" select="."/>
            </xsl:call-template>
          </xsl:for-each>
        </xsl:element>
      </xsl:element>
    </xsl:element>
  </xsl:template>
  <xsl:template name="char-sheet">
    <xsl:param name="character"/>
    <xsl:variable name="notes">
      <xsl:call-template name="parse-notes">
        <xsl:with-param name="notes">
          <xsl:value-of select="$character/noteList"/>
        </xsl:with-param>
      </xsl:call-template>
    </xsl:variable>
    <xsl:element name="div">
      <xsl:attribute name="class"><xsl:text>row</xsl:text></xsl:attribute>
      <xsl:element name="div">
        <xsl:attribute name="class"><xsl:text>col-12</xsl:text></xsl:attribute>
        <xsl:element name="div">
          <xsl:attribute name="class"><xsl:text>card</xsl:text></xsl:attribute>
          <xsl:element name="div">
            <xsl:attribute name="class"><xsl:text>card-header</xsl:text></xsl:attribute>
            <xsl:element name="div">
              <xsl:attribute name="class"><xsl:text>row</xsl:text></xsl:attribute>
              <xsl:element name="div">
                <xsl:attribute name="class"><xsl:text>col-4</xsl:text></xsl:attribute>
                <xsl:element name="div">
                  <xsl:attribute name="class"><xsl:text>row</xsl:text></xsl:attribute>
                  <xsl:element name="div">
                    <xsl:attribute name="class"><xsl:text>col-12</xsl:text></xsl:attribute>
                    <xsl:element name="h2"><xsl:text>DUNGEONS &amp; DRAGONS</xsl:text></xsl:element>
                  </xsl:element>
                  <xsl:element name="div">
                    <xsl:attribute name="class"><xsl:text>col-6 text-right</xsl:text></xsl:attribute>
                    <xsl:element name="h4"><xsl:text>CHARACTER NAME:</xsl:text></xsl:element>
                  </xsl:element>
                  <xsl:element name="div">
                    <xsl:attribute name="class"><xsl:text>col-6</xsl:text></xsl:attribute>
                    <xsl:element name="h4"><xsl:value-of select="$notes"/></xsl:element>
                  </xsl:element>
                </xsl:element>
              </xsl:element>
              <xsl:element name="div">
                <xsl:attribute name="class"><xsl:text>col</xsl:text></xsl:attribute>
                <xsl:element name="div">
                  <xsl:attribute name="class"><xsl:text>card</xsl:text></xsl:attribute>
                  <xsl:element name="div">
                    <xsl:attribute name="class"><xsl:text>card-body</xsl:text></xsl:attribute>
                    <xsl:element name="table">
                      <xsl:attribute name="class"><xsl:text>header-table</xsl:text></xsl:attribute>
                      <xsl:element name="tr">
                        <xsl:element name="th"><xsl:text>CLASS &amp; LEVEL</xsl:text></xsl:element>
                        <xsl:element name="td"><xsl:text></xsl:text></xsl:element>
                        <xsl:element name="th"><xsl:text>BACKGROUND</xsl:text></xsl:element>
                        <xsl:element name="td"><xsl:text></xsl:text></xsl:element>
                        <xsl:element name="th"><xsl:text>PLAYER NAME</xsl:text></xsl:element>
                        <xsl:element name="td"><xsl:text></xsl:text></xsl:element>
                      </xsl:element>
                      <xsl:element name="tr">
                        <xsl:element name="th"><xsl:text>RACE</xsl:text></xsl:element>
                        <xsl:element name="td"><xsl:text></xsl:text></xsl:element>
                        <xsl:element name="th"><xsl:text>ALIGNMENT</xsl:text></xsl:element>
                        <xsl:element name="td"><xsl:text></xsl:text></xsl:element>
                        <xsl:element name="th"><xsl:text>XP</xsl:text></xsl:element>
                        <xsl:element name="td"><xsl:text></xsl:text></xsl:element>
                      </xsl:element>
                    </xsl:element>
                  </xsl:element>
                </xsl:element>
              </xsl:element>
            </xsl:element>
          </xsl:element>
          <xsl:element name="div">
            <xsl:attribute name="class"><xsl:text>card-body</xsl:text></xsl:attribute>
          </xsl:element>
        </xsl:element>
      </xsl:element>
    </xsl:element>
  </xsl:template>
  <xsl:template name="parse-notes">
    <xsl:param name="notes"/>
    <xsl:element name="notes">
      <xsl:call-template name="parse-notes-recursive">
        <xsl:with-param name="fields"><xsl:value-of select="$note-fields"/></xsl:with-param>
        <xsl:with-param name="list"><xsl:value-of select="$notes"/></xsl:with-param>
        <xsl:with-param name="delim"><xsl:value-of select="$box-x"/></xsl:with-param>
      </xsl:call-template>
    </xsl:element>
  </xsl:template>
  <xsl:template name="parse-notes-recursive">
    <xsl:param name="fields"/>
    <xsl:param name="list"/>
    <xsl:param name="delim"/>
    <xsl:variable name="first-field" select="substring-before($fields, ',')"/>
    <xsl:variable name="remaining-fields" select="substring-after($fields, ',')"/>    
    <xsl:variable name="first-item" select="substring-before($list, $delim)"/>
    <xsl:variable name="remaining-items" select="substring-after($list, $delim)"/>
    <xsl:element name="{$first-field}"><xsl:value-of select="$first-item"/></xsl:element>
    <xsl:if test="($remaining-items) and ($remaining-fields)">
      <xsl:call-template name="parse-list-recursive">
        <xsl:with-param name="fields"><xsl:value-of select="$remaining-fields"/></xsl:with-param>
        <xsl:with-param name="list"><xsl:value-of select="$remaining-items"/></xsl:with-param>
        <xsl:with-param name="delim"><xsl:value-of select="$delim"/></xsl:with-param>
      </xsl:call-template>
    </xsl:if>
  </xsl:template>
</xsl:stylesheet>
