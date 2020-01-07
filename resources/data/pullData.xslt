<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <data>
      <races>
        <xsl:copy-of select="//race[contains(name/text(),'Githzerai')]"/>
      </races>
      <monsters>
        <xsl:copy-of select="//monster[contains(name/text(),'Githzerai')]"/>
      </monsters>
    </data>
  </xsl:template>
</xsl:stylesheet>
