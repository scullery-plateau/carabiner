<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:variable name="box-x" select="string('⊠')"/>
  <xsl:variable name="box-dash" select="string('⊟')"/>
  <xsl:variable name="box-dot" select="string('⊡')"/>
  <xsl:variable name="weapon-fields" select="string('name,score,save-proficient,bonus')"/>

  <xsl:template match="/">
    <xsl:element name="characters">
      <xsl:for-each select="//character">
        <xsl:call-template name="make-character">
          <xsl:with-param name="character" select="."/>
        </xsl:call-template>
      </xsl:for-each>
    </xsl:element>
  </xsl:template>

  <xsl:template name="make-character">
    <xsl:param name="character"/>
    <xsl:element name="character">
      <xsl:element name="weapons">
        <xsl:call-template name="nested-partition">
          <xsl:with-param name="list" select="$character/weaponList"/>
          <xsl:with-param name="list-delim" select="$box-x"/>
          <xsl:with-param name="field-count" select="number(11)"/>
          <xsl:with-param name="delim" select=","/>
          <xsl:with-param name="row-delim" select=";"/>
          <xsl:with-param name="nested-field-count" select="number(2)"/>
          <xsl:with-param name="nested-delim" select="_"/>
          <xsl:with-param name="nested-row-delim" select="+"/>
        </xsl:call-template>
      </xsl:element>
    </xsl:element>
  </xsl:template>

  <xsl:template name="nested-partition">
    <xsl:param name="list"/>
    <xsl:param name="list-delim"/>
    <xsl:param name="field-count"/>
    <xsl:param name="delim"/>
    <xsl:param name="row-delim"/>
    <xsl:param name="nested-field-count"/>
    <xsl:param name="nested-delim"/>
    <xsl:param name="nested-row-delim"/>
    <xsl:call-template name="nested-partition-recurse">
      <xsl:with-param name="list" select="substring-after($list,$list-delim)"/>
      <xsl:with-param name="list-delim" select="$list-delim"/>
      <xsl:with-param name="field-count" select="$field-count"/>
      <xsl:with-param name="delim" select="$delim"/>
      <xsl:with-param name="row-delim" select="$row-delim"/>
      <xsl:with-param name="nested-field-count" select="$nested-field-count"/>
      <xsl:with-param name="nested-delim" select="$nested-delim"/>
      <xsl:with-param name="nested-row-delim" select="$nested-row-delim"/>
      <xsl:with-param name="countdown" select="number($field-count) - 1"/>
      <xsl:with-param name="in-nested" select="false()"/>
    </xsl:call-template>
  </xsl:template>

  <xsl:template name="nested-partition-recurse">
    <xsl:param name="list"/>
    <xsl:param name="list-delim"/>
    <xsl:param name="field-count"/>
    <xsl:param name="delim"/>
    <xsl:param name="row-delim"/>
    <xsl:param name="nested-field-count"/>
    <xsl:param name="nested-delim"/>
    <xsl:param name="nested-row-delim"/>
    <xsl:param name="countdown"/>
    <xsl:param name="in-nested"/>
    <xsl:param name="next-delim" select="string('')"/>
    <xsl:param name="out" select="string('')"/>
    <xsl:variable name="item">
      <xsl:choose>
        <xsl:when test="contains($list,$list-delim)">
          <xsl:value-of select="substring-before($list,$list-delim)"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="$list"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <xsl:variable name="step">
      <xsl:value-of select="concat(',',$item)"/>
    </xsl:variable>
    <xsl:choose>
      <xsl:when test="contains($list, $list-delim)">
        <xsl:call-template name="nested-partition-recurse">
          <xsl:with-param name="list" select="substring-after($list,$list-delim)"/>
          <xsl:with-param name="list-delim" select="$list-delim"/>
          <xsl:with-param name="field-count" select="$field-count"/>
          <xsl:with-param name="delim" select="$delim"/>
          <xsl:with-param name="row-delim" select="$row-delim"/>
          <xsl:with-param name="nested-field-count" select="$nested-field-count"/>
          <xsl:with-param name="nested-delim" select="$nested-delim"/>
          <xsl:with-param name="nested-row-delim" select="$nested-row-delim"/>
          <xsl:with-param name="countdown">
            <xsl:value-of select="number($countdown) - 1"/>
          </xsl:with-param>
          <xsl:with-param name="in-nested">
            <xsl:value-of select="$in-nested"/>
          </xsl:with-param>
          <xsl:with-param name="out" select="concat($out,$step)"/>
        </xsl:call-template>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="concat($out,$step)"/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>
  
</xsl:stylesheet>
