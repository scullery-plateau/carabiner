<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="text"/>
  <xsl:template match="/">
    <xsl:text>[</xsl:text>
    <xsl:for-each select="//character">
      <xsl:text>{</xsl:text>
      <xsl:call-template name="char-sheet">
        <xsl:with-param name="character" select="."/>
      </xsl:call-template>
      <xsl:text>}</xsl:text>
      <xsl:if test="position() != last()">
        <xsl:text>,</xsl:text>
      </xsl:if>
    </xsl:for-each>
    <xsl:text>]</xsl:text>
  </xsl:template>
  <xsl:template name="char-sheet">
    <xsl:param name="character"/>
    <xsl:for-each select="$character/node()">
      <xsl:if test="name()">
        <xsl:text>"</xsl:text>
        <xsl:value-of select="name()"/>
        <xsl:text>":"</xsl:text>
        <xsl:call-template name="string-replace-all">
          <xsl:with-param name="text" select="text()" />
          <xsl:with-param name="replace"><xsl:text>
</xsl:text></xsl:with-param>
          <xsl:with-param name="by"><xsl:text>/n</xsl:text></xsl:with-param>
        </xsl:call-template>
        <xsl:text>"</xsl:text>
        <xsl:if test="name() != 'classResource'">
          <xsl:text>,</xsl:text>
        </xsl:if>
      </xsl:if>
    </xsl:for-each>
  </xsl:template>
  <xsl:template name="string-replace-all">
    <xsl:param name="text" />
    <xsl:param name="replace" />
    <xsl:param name="by" />
    <xsl:choose>
      <xsl:when test="$text = '' or $replace = ''or not($replace)" >
        <!-- Prevent this routine from hanging -->
        <xsl:value-of select="$text" />
      </xsl:when>
      <xsl:when test="contains($text, $replace)">
        <xsl:value-of select="substring-before($text,$replace)" />
        <xsl:value-of select="$by" />
        <xsl:call-template name="string-replace-all">
          <xsl:with-param name="text" select="substring-after($text,$replace)" />
          <xsl:with-param name="replace" select="$replace" />
          <xsl:with-param name="by" select="$by" />
        </xsl:call-template>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="$text" />
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>
</xsl:stylesheet>
