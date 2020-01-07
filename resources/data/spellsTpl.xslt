<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <xsl:for-each select="//spell">
      <xsl:call-template name="get-spell">
        <xsl:with-param name="spell" select="."/>
      </xsl:call-template>
    </xsl:for-each>
  </xsl:template>
  <xsl:template name="get-spell">
    <xsl:param name="spell"/>
    <xsl:variable name="school-name">
      <xsl:call-template name="get-school-name">
        <xsl:with-param name="school-code" select="$spell/school"/>
      </xsl:call-template>
    </xsl:variable>
### <xsl:value-of select="$spell/name"/>
<xsl:text>

</xsl:text>
    <xsl:choose>
      <xsl:when test="$spell/level = 0"><xsl:value-of select="$school-name"/> cantrip</xsl:when>
      <xsl:otherwise>*Level <xsl:value-of select="$spell/level"/> <xsl:value-of select="$school-name"/>*</xsl:otherwise>
    </xsl:choose>

**Casting Time: **<xsl:value-of select="$spell/time"/>

**Range: **<xsl:value-of select="$spell/range"/>

**Components: **<xsl:value-of select="$spell/components"/>

**Duration: **<xsl:value-of select="$spell/duration"/>

<xsl:for-each select="$spell/text">
<xsl:text>

</xsl:text>
<xsl:value-of select="text()"/>
</xsl:for-each>
<xsl:text>

</xsl:text>
  </xsl:template>
  <xsl:template name="get-school-name">
   <xsl:param name="school-code"/><xsl:choose>
      <xsl:when test="$school-code = 'A'"><xsl:text>Abjuration</xsl:text></xsl:when>
      <xsl:when test="$school-code = 'C'"><xsl:text>Conjuration</xsl:text></xsl:when>
      <xsl:when test="$school-code = 'D'"><xsl:text>Divination</xsl:text></xsl:when>
      <xsl:when test="$school-code = 'EN'"><xsl:text>Enchantment</xsl:text></xsl:when>
      <xsl:when test="$school-code = 'EV'"><xsl:text>Evocation</xsl:text></xsl:when>
      <xsl:when test="$school-code = 'I'"><xsl:text>Illusion</xsl:text></xsl:when>
      <xsl:when test="$school-code = 'N'"><xsl:text>Necromancy</xsl:text></xsl:when>
      <xsl:when test="$school-code = 'T'"><xsl:text>Transmutation</xsl:text></xsl:when>
      <xsl:otherwise></xsl:otherwise></xsl:choose>
  </xsl:template>
</xsl:stylesheet>
